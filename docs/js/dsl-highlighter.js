/**
 * MissFisher DSL (Angex) 语法高亮器
 * 基于 AngexConverter.cs 中的语法定义
 * 使用粗粒度正则匹配整个语法块
 *
 * 颜色/类别规则：
 * - 语义类型：dsl-mode / dsl-trigger / dsl-hook / dsl-bite / dsl-time / dsl-name / dsl-id / dsl-op / dsl-sep / dsl-comment
 * - 语法异常不做特殊类型，按 dsl-op 简单渲染
 */

// 基础模式定义（以 docs/AngexGarmmar.md 为准）
const 钓法模式 = '大鱼|耐心|平钓|bf|pt|nm';
const 全部模式 = '全部|all(?![A-Za-z-])';
const 提钩模式 = '强力|精准|双提|三提|华丽|双重|三重|pw|pc|dh|th|sh';
const 内联拍水模式 = '拍水|拍|ss';
const 内联专一模式 = '专一|专|ic';
const 嵌套模式 = '拍水后|专一后|阶段|stg|stage|鱼识|int|pss|pic|拍水|拍|ss|专一|专|ic';

/**
 * 转义 HTML 特殊字符
 */
function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

/**
 * 包装为带样式的 span
 */
function wrap(className, content) {
    return `<span class="${className}">${escapeHtml(content)}</span>`;
}

const tokenClassMap = {
    mode: 'dsl-mode',
    trigger: 'dsl-trigger',
    hook: 'dsl-hook',
    bite: 'dsl-bite',
    time: 'dsl-time',
    name: 'dsl-name',
    id: 'dsl-id',
    op: 'dsl-op',
    sep: 'dsl-sep',
    comment: 'dsl-comment',
};

function token(kind, content) {
    return wrap(tokenClassMap[kind] || 'dsl-op', content);
}

/**
 * 高亮数值范围（咬饵时间/ET）
 */
function highlightNumericOperators(text) {
    let result = '';
    let idx = 0;
    const re = /(\d+(?:\.\d+)?)|([+\-~])/g;
    let m;

    while ((m = re.exec(text)) !== null) {
        if (m.index > idx) {
            result += escapeHtml(text.slice(idx, m.index));
        }
        if (m[1]) {
            result += token('time', m[1]);
        } else {
            result += token('op', m[2]);
        }
        idx = m.index + m[0].length;
    }

    if (idx < text.length) {
        result += escapeHtml(text.slice(idx));
    }
    return result;
}

/**
 * 高亮 IdOrName（支持 name|id）
 */
function highlightIdOrNameToken(text) {
    const m = text.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!m) {
        return token('name', text);
    }

    const leading = m[1];
    const core = m[2];
    const trailing = m[3];
    let result = escapeHtml(leading);

    if (!core) {
        return result + escapeHtml(trailing);
    }

    const aliasMatch = core.match(/^([\s\S]*?)(\s*\|\s*)(\d+)$/);
    if (aliasMatch && aliasMatch[1].trim().length > 0) {
        result += token('name', aliasMatch[1]);
        result += token('op', aliasMatch[2]);
        result += token('id', aliasMatch[3]);
    } else {
        if (/^\d+$/.test(core.trim())) {
            result += token('id', core);
        } else {
            result += token('name', core);
        }
    }

    return result + escapeHtml(trailing);
}

/**
 * 高亮列表内容（分隔符：、 或 ||）
 */
function highlightListContent(text, tokenHighlighter = highlightIdOrNameToken) {
    let result = '';
    const parts = text.split(/(\|\||、)/);
    for (const part of parts) {
        if (!part) {
            continue;
        }
        if (part === '||' || part === '、') {
            result += token('sep', part);
        } else {
            result += tokenHighlighter(part);
        }
    }
    return result;
}

/**
 * 高亮目标集合项（支持 ? / ？ 前缀）
 */
function highlightTargetToken(text) {
    const m = text.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!m) {
        return highlightIdOrNameToken(text);
    }

    const leading = m[1];
    let core = m[2];
    const trailing = m[3];
    let result = escapeHtml(leading);

    if (!core) {
        return result + escapeHtml(trailing);
    }

    if (core[0] === '?' || core[0] === '？') {
        result += token('op', core[0]);
        core = core.slice(1);
    }

    if (core === '《' || core === '<') {
        result += token('op', core);
    } else {
        result += highlightIdOrNameToken(core);
    }

    return result + escapeHtml(trailing);
}

/**
 * 高亮天气括号内部（支持 晴=>阴 / 晴=》阴）
 */
function highlightWeatherInner(text) {
    let result = '';
    const weatherSegments = text.split(/(\s*=\s*[>》]\s*)/);
    for (const seg of weatherSegments) {
        if (!seg) {
            continue;
        }
        if (/^\s*=\s*[>》]\s*$/.test(seg)) {
            result += token('op', seg);
        } else {
            result += highlightListContent(seg, highlightIdOrNameToken);
        }
    }
    return result;
}

/**
 * 高亮 DSL 代码 - 使用粗粒度正则匹配
 */
function highlightDSL(code) {
    let result = '';
    let remaining = code;
    const modeWithBaitRegex = new RegExp(
        `^(${钓法模式})(\\s*)([【\\[(（])([^】\\]）)]+)([】\\]）)])`,
        'i'
    );
    const modeOnlyRegex = new RegExp(`^(${钓法模式})(?![A-Za-z0-9_\\u4E00-\\u9FFF])`, 'i');
    const windowRegex = /^@(\s*)(?:(\d{4}\s*[~-]\s*\d{4})(\s*))?(?:([（(])([^）)]+)([）)]))?/;
    const nestedStartRegex = new RegExp(`^@(\\s*)(${嵌套模式})(\\s*=\\s*)([>》])`, 'i');
    const surfaceRegex = new RegExp(`^@(\\s*)(${内联拍水模式})(?!\\s*=)`, 'i');
    const focusRegex = new RegExp(`^@(\\s*)(${内联专一模式})(?!\\s*=)`, 'i');
    const extraBiteRegex = /^([（(]\s*(?:全部|all|[!！]{1,3})\s*[)）])/i;
    const biteTimeRangeRegex =
        /^((?:[~-]\s*\d+(?:\.\d+)?(?:\s*\+\s*\d+(?:\.\d+)?)?)|(?:\d+(?:\.\d+)?(?:\s*\+\s*\d+(?:\.\d+)?)?\s*[~-](?:\s*\d+(?:\.\d+)?(?:\s*\+\s*\d+(?:\.\d+)?)?)?))/;
    const biteHookRegex = new RegExp(
        `^((?:${全部模式}|[!！]{1,3}(?:\\s*\\+\\s*[!！]{1,3})*))(\\s*(?:${提钩模式})\\d?)?`,
        'i'
    );
    const bracketRegex = /^([【\[(（])([^】\]）)]+)([】\]）)])/;
    const equalRegex = /^(=)([^；;@》>《<]*?)([；;]|$)/;
    
    while (remaining.length > 0) {
        let matched = false;
        
        // 1. 注释 //...
        const commentMatch = remaining.match(/^(\/\/[^\n]*)/);
        if (commentMatch) {
            result += token('comment', commentMatch[1]);
            remaining = remaining.slice(commentMatch[1].length);
            matched = true;
            continue;
        }
        
        // 2. 模式 + 可选钓饵
        const modeWithBaitMatch = remaining.match(modeWithBaitRegex);
        if (modeWithBaitMatch) {
            result += token('mode', modeWithBaitMatch[1]);
            result += escapeHtml(modeWithBaitMatch[2]);
            result += token('op', modeWithBaitMatch[3]);
            result += highlightIdOrNameToken(modeWithBaitMatch[4]);
            result += token('op', modeWithBaitMatch[5]);
            remaining = remaining.slice(modeWithBaitMatch[0].length);
            matched = true;
            continue;
        }

        // 3. 仅模式
        const modeOnlyMatch = remaining.match(modeOnlyRegex);
        if (modeOnlyMatch) {
            result += token('mode', modeOnlyMatch[1]);
            remaining = remaining.slice(modeOnlyMatch[0].length);
            matched = true;
            continue;
        }
        
        // 4. @窗口期：支持 @ET / @天气 / @ET天气，天气支持 晴=>阴 或 晴=》阴
        const windowMatch = remaining.match(windowRegex);
        if (windowMatch && (windowMatch[2] || windowMatch[5])) {
            result += token('op', '@');
            result += escapeHtml(windowMatch[1]);
            if (windowMatch[2]) {
                result += highlightNumericOperators(windowMatch[2]);
                if (windowMatch[3]) {
                    result += escapeHtml(windowMatch[3]);
                }
            }
            if (windowMatch[4]) {
                result += token('op', windowMatch[4]);
                result += highlightWeatherInner(windowMatch[5]);
                result += token('op', windowMatch[6]);
            }
            remaining = remaining.slice(windowMatch[0].length);
            matched = true;
            continue;
        }
        
        // 5. 嵌套表达式起始：@类型 =》 / => ...
        const nestedStartMatch = remaining.match(nestedStartRegex);
        if (nestedStartMatch) {
            result += token('op', '@');
            result += escapeHtml(nestedStartMatch[1]);
            result += token('trigger', nestedStartMatch[2]);
            result += token('op', nestedStartMatch[3]);
            result += token('op', nestedStartMatch[4]);
            remaining = remaining.slice(nestedStartMatch[0].length);
            matched = true;
            continue;
        }
        
        // 6. @拍水（内联）
        const surfaceMatch = remaining.match(surfaceRegex);
        if (surfaceMatch) {
            result += token('op', '@');
            result += escapeHtml(surfaceMatch[1]);
            result += token('trigger', surfaceMatch[2]);
            remaining = remaining.slice(surfaceMatch[0].length);
            matched = true;
            continue;
        }
        
        // 7. @专一（内联）
        const focusMatch = remaining.match(focusRegex);
        if (focusMatch) {
            result += token('op', '@');
            result += escapeHtml(focusMatch[1]);
            result += token('trigger', focusMatch[2]);
            remaining = remaining.slice(focusMatch[0].length);
            matched = true;
            continue;
        }
        
        // 8. 》阶段分隔符
        if (remaining[0] === '》' || remaining[0] === '>') {
            result += token('op', remaining[0]);
            remaining = remaining.slice(1);
            matched = true;
            continue;
        }
        
        // 9. 《 / <（游动饵标记或阶段闭合）
        if (remaining[0] === '《' || remaining[0] === '<') {
            result += token('op', remaining[0]);
            remaining = remaining.slice(1);
            matched = true;
            continue;
        }
        
        // 10. 额外咬饵类型：(全部/all/!/!!/!!!)
        const extraBiteMatch = remaining.match(extraBiteRegex);
        if (extraBiteMatch) {
            const parts = extraBiteMatch[1].match(/^([（(]\s*)([\s\S]*?)(\s*[)）])$/);
            if (parts) {
                result += token('op', parts[1]);
                result += token('bite', parts[2]);
                result += token('op', parts[3]);
            } else {
                result += token('op', extraBiteMatch[1]);
            }
            remaining = remaining.slice(extraBiteMatch[1].length);
            matched = true;
            continue;
        }
        
        // 11. 咬饵时间范围：~6 / 6~ / 6+10~17+32 / 10~32 ...
        const biteTimeRangeMatch = remaining.match(biteTimeRangeRegex);
        if (biteTimeRangeMatch && biteTimeRangeMatch[1].length > 0) {
            result += highlightNumericOperators(biteTimeRangeMatch[1]);
            remaining = remaining.slice(biteTimeRangeMatch[1].length);
            matched = true;
            continue;
        }
        
        // 12. 咬饵类型 + 提钩类型（严格匹配）
        const biteHookMatch = remaining.match(biteHookRegex);
        if (biteHookMatch && biteHookMatch[1]) {
            const biteParts = biteHookMatch[1].split(/(\s*\+\s*)/);
            for (const part of biteParts) {
                if (!part) {
                    continue;
                }
                if (/^\s*\+\s*$/.test(part)) {
                    result += token('op', part);
                } else {
                    result += token('bite', part);
                }
            }
            if (biteHookMatch[2]) {
                const ws = (biteHookMatch[2].match(/^\s*/) || [''])[0];
                const hook = biteHookMatch[2].slice(ws.length);
                result += escapeHtml(ws);
                if (hook) {
                    result += token('hook', hook);
                }
            }
            remaining = remaining.slice(biteHookMatch[0].length);
            matched = true;
            continue;
        }

        // 13. 通用数字（计数器/ID/普通数字）
        const numberMatch = remaining.match(/^(\d+(?:\.\d+)?)/);
        if (numberMatch) {
            result += token('time', numberMatch[1]);
            remaining = remaining.slice(numberMatch[1].length);
            matched = true;
            continue;
        }
        
        // 14. 括号内容（目标集合/钓饵名/IdOrName）
        const bracketMatch = remaining.match(bracketRegex);
        if (bracketMatch) {
            result += token('op', bracketMatch[1]);
            result += highlightListContent(bracketMatch[2], highlightTargetToken);
            result += token('op', bracketMatch[3]);
            remaining = remaining.slice(bracketMatch[0].length);
            matched = true;
            continue;
        }
        
        // 15. 全局参数起始：= ... ;
        const equalMatch = remaining.match(equalRegex);
        if (equalMatch) {
            result += token('op', '=');
            const content = equalMatch[2];
            if (content) {
                result += highlightDSL(content);
            }
            if (equalMatch[3]) {
                result += token('sep', equalMatch[3]);
            }
            remaining = remaining.slice(equalMatch[0].length);
            matched = true;
            continue;
        }

        // 16. 单独的 @（没有匹配到上面的模式）
        if (remaining[0] === '@') {
            result += token('op', '@');
            remaining = remaining.slice(1);
            matched = true;
            continue;
        }
        
        // 17. markdown 反引号 `内容`
        if (remaining[0] === '`') {
            const closeIdx = remaining.indexOf('`', 1);
            if (closeIdx !== -1) {
                result += token('op', '`');
                result += highlightDSL(remaining.slice(1, closeIdx));
                result += token('op', '`');
                remaining = remaining.slice(closeIdx + 1);
                matched = true;
                continue;
            }
        }
        
        // 18. 标点符号
        if ('~-;；()（）|+、，[]{}?？='.includes(remaining[0])) {
            if (remaining[0] === ';' || remaining[0] === '；' || remaining[0] === '、') {
                result += token('sep', remaining[0]);
            } else {
                result += token('op', remaining[0]);
            }
            remaining = remaining.slice(1);
            matched = true;
            continue;
        }
        
        // 19. 其他字符直接输出（已转义）
        if (!matched) {
            if (/\s/.test(remaining[0])) {
                result += escapeHtml(remaining[0]);
            } else {
                result += token('op', remaining[0]);
            }
            remaining = remaining.slice(1);
        }
    }
    
    return result;
}

function unescapeHtml(text) {
    return text
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

const diffEquivalentSymbolMap = {
    '》': '>',
    '>': '>',
    '《': '<',
    '<': '<',
    '；': ';',
    ';': ';',
    '！': '!',
    '!': '!',
    '（': '(',
    '(': '(',
    '）': ')',
    ')': ')',
    '【': '[',
    '[': '[',
    '】': ']',
    ']': ']',
    '？': '?',
    '?': '?',
};

function normalizeDiffComparable(text) {
    let normalized = '';
    for (const ch of text) {
        normalized += diffEquivalentSymbolMap[ch] || ch;
    }
    return normalized.replace(/\s+/g, '');
}

function parseHighlightedSegments(html) {
    const segments = [];
    const spanRegex = /<span class="([^"]+)">([\s\S]*?)<\/span>/g;
    let lastIndex = 0;
    let match;

    while ((match = spanRegex.exec(html)) !== null) {
        if (match.index > lastIndex) {
            const raw = html.slice(lastIndex, match.index);
            segments.push({
                type: 'raw',
                html: raw,
                text: unescapeHtml(raw),
            });
        }

        segments.push({
            type: 'span',
            html: match[0],
            className: match[1],
            innerHtml: match[2],
            text: unescapeHtml(match[2]),
        });

        lastIndex = spanRegex.lastIndex;
    }

    if (lastIndex < html.length) {
        const raw = html.slice(lastIndex);
        segments.push({
            type: 'raw',
            html: raw,
            text: unescapeHtml(raw),
        });
    }

    return segments;
}

function addClassToSpan(spanHtml, className) {
    return spanHtml.replace(
        /^<span class="([^"]+)">/,
        (_, classes) => `<span class="${classes} ${className}">`
    );
}

function buildComparableTokens(segments) {
    const tokens = [];
    for (let i = 0; i < segments.length; i++) {
        const key = normalizeDiffComparable(segments[i].text);
        if (!key) {
            continue;
        }
        tokens.push({
            segIndex: i,
            key,
        });
    }
    return tokens;
}

function computeMatchedSegmentIndexes(leftSegments, rightSegments) {
    const left = buildComparableTokens(leftSegments);
    const right = buildComparableTokens(rightSegments);
    const n = left.length;
    const m = right.length;
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (left[i - 1].key === right[j - 1].key) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    const leftMatched = new Set();
    const rightMatched = new Set();
    let i = n;
    let j = m;

    while (i > 0 && j > 0) {
        if (left[i - 1].key === right[j - 1].key) {
            leftMatched.add(left[i - 1].segIndex);
            rightMatched.add(right[j - 1].segIndex);
            i--;
            j--;
        } else if (dp[i - 1][j] >= dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return { leftMatched, rightMatched };
}

function renderSegmentsWithDiffMarks(segments, matchedSet) {
    let result = '';

    for (let i = 0; i < segments.length; i++) {
        const seg = segments[i];
        const key = normalizeDiffComparable(seg.text);

        if (!key || matchedSet.has(i)) {
            result += seg.html;
            continue;
        }

        if (seg.type === 'span') {
            result += addClassToSpan(seg.html, 'diff-token-change');
        } else {
            result += `<span class="diff-token-change">${seg.html}</span>`;
        }
    }

    return result;
}

function highlightDiffPair(removedText, addedText) {
    const removedHtml = highlightDSL(removedText);
    const addedHtml = highlightDSL(addedText);
    const removedSegments = parseHighlightedSegments(removedHtml);
    const addedSegments = parseHighlightedSegments(addedHtml);
    const { leftMatched, rightMatched } = computeMatchedSegmentIndexes(removedSegments, addedSegments);

    return {
        removed: renderSegmentsWithDiffMarks(removedSegments, leftMatched),
        added: renderSegmentsWithDiffMarks(addedSegments, rightMatched),
    };
}

/**
 * 高亮 diff 代码块
 * - 对 +/- 代码块做 token 级语义对比
 * - 比较时忽略空白差异与等价符号差异（如 > / 》, [ / 【, ; / ；）
 */
function highlightDiff(code) {
    const lines = code.split('\n');
    const output = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith('+') || line.startsWith('-')) {
            const block = [];
            while (i < lines.length && (lines[i].startsWith('+') || lines[i].startsWith('-'))) {
                block.push({
                    type: lines[i][0],
                    content: lines[i].slice(1),
                    render: null,
                });
                i++;
            }
            i--;

            const removedIndexes = [];
            const addedIndexes = [];
            for (let j = 0; j < block.length; j++) {
                if (block[j].type === '-') {
                    removedIndexes.push(j);
                } else {
                    addedIndexes.push(j);
                }
            }

            const pairCount = Math.min(removedIndexes.length, addedIndexes.length);
            for (let p = 0; p < pairCount; p++) {
                const rIdx = removedIndexes[p];
                const aIdx = addedIndexes[p];
                const pair = highlightDiffPair(block[rIdx].content, block[aIdx].content);
                block[rIdx].render = pair.removed;
                block[aIdx].render = pair.added;
            }

            for (const entry of block) {
                const content = entry.render || highlightDSL(entry.content);
                if (entry.type === '+') {
                    output.push(`<span class="diff-add">${escapeHtml('+')}${content}</span>`);
                } else {
                    output.push(`<span class="diff-remove">${escapeHtml('-')}${content}</span>`);
                }
            }
            continue;
        }

        output.push(highlightDSL(line));
    }

    return output.join('\n');
}

/**
 * 高亮页面中所有代码块
 */
function highlightDSLBlocks() {
    document.querySelectorAll('pre code').forEach(block => {
        const code = block.textContent;
        const classNames = block.className || '';
        
        if (classNames.includes('language-angex') || 
            classNames.includes('language-mfdsl') ||
            classNames.includes('language-dsl')) {
            block.innerHTML = highlightDSL(code);
        } else if (classNames.includes('language-diff')) {
            block.innerHTML = highlightDiff(code);
        } else if (!classNames.includes('language-')) {
            // 检测是否包含 DSL 语法
            if (/大鱼|耐心|平钓|[》《]|[【】]/.test(code)) {
                block.innerHTML = highlightDSL(code);
            }
        }
    });
}

// 导出函数供全局使用
window.highlightDSL = highlightDSL;
window.highlightDSLBlocks = highlightDSLBlocks;
