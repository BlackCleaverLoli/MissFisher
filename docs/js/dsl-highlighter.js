/**
 * MissFisher DSL (Angex) 语法高亮器
 * 基于 AngexConverter.cs 中的语法定义
 * 使用粗粒度正则匹配整个语法块
 *
 * 颜色/类别规则（简化并统一）：
 * - 钓法基本模式(平钓/大鱼/耐心) = 关键字 dsl-keyword
 * - 变量（物品名、ID、数字、时间、天气等） = 字面量 dsl-literal
 * - 符号（括号、分隔符、@、=、|、》《、标点等） = 符号 dsl-symbol
 * - // 注释 = 注释 dsl-comment
 */

// 基础模式定义（参考 AngexConverter.cs）
const 钓法模式 = '大鱼|耐心|平钓|bf|pt|nm';
const 全部模式 = '全部|all';
const 提钩模式 = '强力|精准|双提|三提|华丽|双重|三重|pw|pc|dh|th|sh';
const 拍水模式 = '拍水|ss';
const 专一模式 = '专一|ic';
const 阶段模式 = '阶段|stage';
const 鱼识模式 = '鱼识|int';
const 拍水后模式 = '拍水后|pss';

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

/**
 * 高亮 DSL 代码 - 使用粗粒度正则匹配
 */
function highlightDSL(code) {
    let result = '';
    let remaining = code;
    
    while (remaining.length > 0) {
        let matched = false;
        
        // 1. 注释 //...
        const commentMatch = remaining.match(/^(\/\/[^\n]*)/);
        if (commentMatch) {
            result += wrap('dsl-comment', commentMatch[1]);
            remaining = remaining.slice(commentMatch[1].length);
            matched = true;
            continue;
        }
        
        // 2. 钓法基本模式 + 可选的【钓饵】 -> 钓法模式为关键字
        const modeWithBaitMatch = remaining.match(new RegExp(
            `^(${钓法模式})([【\\[(（])([^】\\]）)]+)([】\\]）)])`, 'i'
        ));
        if (modeWithBaitMatch) {
            result += wrap('dsl-keyword', modeWithBaitMatch[1]); // 钓法基本模式 = 关键字
            if (modeWithBaitMatch[2]) {
                // 括号符号统一为符号色
                result += wrap('dsl-symbol', modeWithBaitMatch[2]); // 开括号
                const baitContent = modeWithBaitMatch[3];
                // 名称或 名称|ID -> 内容当作字面量，分隔符作为符号
                if (baitContent.includes('|')) {
                    const parts = baitContent.split('|');
                    result += wrap('dsl-literal', parts[0]);
                    result += wrap('dsl-symbol', '|');
                    result += wrap('dsl-literal', parts.slice(1).join('|'));
                } else {
                    result += wrap('dsl-literal', baitContent);
                }
                result += wrap('dsl-symbol', modeWithBaitMatch[4]); // 闭括号
            }
            remaining = remaining.slice(modeWithBaitMatch[0].length);
            matched = true;
            continue;
        }
        // 如果没有匹配到【钓饵】，只匹配钓法基本模式
        const modeOnlyMatch = remaining.match(new RegExp(`^(${钓法模式})(?![【\\[(（])`, 'i'));
        if (modeOnlyMatch) {
            result += wrap('dsl-keyword', modeOnlyMatch[1]);
            remaining = remaining.slice(modeOnlyMatch[0].length);
            matched = true;
            continue;
        }
        
        // 3. @窗口期: @数字~数字（天气）或 @（天气）
        const windowMatch = remaining.match(/^@(\d{4})([~-])(\d{4})?([（(])([^）)]+)([）)])/);
        if (windowMatch) {
            result += wrap('dsl-symbol', '@'); // @ = 符号
            result += wrap('dsl-literal', windowMatch[1]); // 开始时间数字 = 字面量
            result += wrap('dsl-symbol', windowMatch[2]); // 分隔符 ~- = 符号
            if (windowMatch[3]) {
                result += wrap('dsl-literal', windowMatch[3]); // 结束时间数字
            }
            result += wrap('dsl-symbol', windowMatch[4]); // 开括号
            const weatherContent = windowMatch[5];
            const weatherParts = weatherContent.split(/([、|])/);
            for (const part of weatherParts) {
                if (part === '、' || part === '|') {
                    result += wrap('dsl-symbol', part);
                } else if (part) {
                    result += wrap('dsl-literal', part);
                }
            }
            result += wrap('dsl-symbol', windowMatch[6]); // 闭括号
            remaining = remaining.slice(windowMatch[0].length);
            matched = true;
            continue;
        }
        // 只有时间没有天气：@数字~数字
        const timeOnlyMatch = remaining.match(/^@(\d{4})([~-])(\d{4})/);
        if (timeOnlyMatch) {
            result += wrap('dsl-symbol', '@');
            result += wrap('dsl-literal', timeOnlyMatch[1]);
            result += wrap('dsl-symbol', timeOnlyMatch[2]);
            result += wrap('dsl-literal', timeOnlyMatch[3]);
            remaining = remaining.slice(timeOnlyMatch[0].length);
            matched = true;
            continue;
        }
        // 只有天气没有时间：@（天气）
        const weatherOnlyMatch = remaining.match(/^@([（(])([^）)]+)([）)])/);
        if (weatherOnlyMatch) {
            result += wrap('dsl-symbol', '@');
            result += wrap('dsl-symbol', weatherOnlyMatch[1]); // 开括号
            const weatherContent = weatherOnlyMatch[2];
            const weatherParts = weatherContent.split(/([、|])/);
            for (const part of weatherParts) {
                if (part === '、' || part === '|') {
                    result += wrap('dsl-symbol', part);
                } else if (part) {
                    result += wrap('dsl-literal', part);
                }
            }
            result += wrap('dsl-symbol', weatherOnlyMatch[3]); // 闭括号
            remaining = remaining.slice(weatherOnlyMatch[0].length);
            matched = true;
            continue;
        }
        
        // 4. @拍水段: @拍水... -> @ 符号, 拍水视作关键字
        const surfaceMatch = remaining.match(new RegExp(`^@(${拍水模式})`, 'i'));
        if (surfaceMatch) {
            result += wrap('dsl-symbol', '@');
            result += wrap('dsl-keyword', surfaceMatch[1]);
            remaining = remaining.slice(surfaceMatch[0].length);
            matched = true;
            continue;
        }
        
        // 5. @专一段: @专一 -> @ 符号, 专一视作关键字
        const focusMatch = remaining.match(new RegExp(`^@(${专一模式})`, 'i'));
        if (focusMatch) {
            result += wrap('dsl-symbol', '@');
            result += wrap('dsl-keyword', focusMatch[1]);
            remaining = remaining.slice(focusMatch[0].length);
            matched = true;
            continue;
        }
        
        // 6. @阶段/鱼识/拍水后: treat as symbol + keyword
        const specialAtMatch = remaining.match(new RegExp(
            `^(@(?:${阶段模式}|${鱼识模式}|${拍水后模式})=)`, 'i'
        ));
        if (specialAtMatch) {
            // 把 @ 和 = 均视为符号，内部关键字部分高亮为关键字
            const full = specialAtMatch[1];
            // 分割 @ 和 后面的内容
            result += wrap('dsl-symbol', full[0]);
            const rest = full.slice(1);
            // rest 里可能包含 =，只把名称当关键字，等号作为符号
            const eqIdx = rest.indexOf('=');
            if (eqIdx !== -1) {
                const name = rest.slice(0, eqIdx);
                result += wrap('dsl-keyword', name);
                result += wrap('dsl-symbol', '=');
            } else {
                result += wrap('dsl-keyword', rest);
            }
            remaining = remaining.slice(specialAtMatch[0].length);
            matched = true;
            continue;
        }
        
        // 7. 》阶段分隔符 -> 符号色
        if (remaining[0] === '》' || remaining[0] === '>') {
            result += wrap('dsl-symbol', remaining[0]);
            remaining = remaining.slice(1);
            matched = true;
            continue;
        }
        
        // 8. 《（用于游动饵目标标记或阶段结束） -> 符号色
        if (remaining[0] === '《' || remaining[0] === '<') {
            result += wrap('dsl-symbol', remaining[0]);
            remaining = remaining.slice(1);
            matched = true;
            continue;
        }
        
        // 9. (额外咬饵类型): (！！) 或 （！！！） -> 符号色
        const extraBiteMatch = remaining.match(/^([（(][!！]{1,3}[)）])/);
        if (extraBiteMatch) {
            result += wrap('dsl-symbol', extraBiteMatch[1]);
            remaining = remaining.slice(extraBiteMatch[1].length);
            matched = true;
            continue;
        }
        
        // 10. 咬饵时间或数字: 数字/时间等 -> 字面量
        const timeMatch = remaining.match(/^([\d.]+(?:\+[\d.]+)?(?:[~-][\d.]+(?:\+[\d.]+)?)?)/);
        if (timeMatch && timeMatch[1].length > 0) {
            result += wrap('dsl-literal', timeMatch[1]);
            remaining = remaining.slice(timeMatch[1].length);
            matched = true;
            continue;
        }
        
        // 11. 咬饵类型 + 提钩类型: 全部/叹号/强力/精准 等 -> 字面量/关键字混合（咬饵类型作为字面量，提钩作为关键字）
        const biteHookMatch = remaining.match(new RegExp(
            `^((?:${全部模式}|[!！+]{1,8})((?:${提钩模式})\\d?)?)`, 'i'
        ));
        if (biteHookMatch) {
            const biteType = biteHookMatch[1].match(new RegExp(`^(${全部模式}|[!！+]{1,8})`, 'i'));
            if (biteType) {
                result += wrap('dsl-literal', biteType[1]);
            }
            if (biteHookMatch[2]) {
                result += wrap('dsl-keyword', biteHookMatch[2]);
            }
            remaining = remaining.slice(biteHookMatch[0].length);
            matched = true;
            continue;
        }
        
        // 12. 【目标鱼】或【任意内容】（非钓饵位置） -> 括号为符号，内容为字面量（若含|则拆分）
        const bracketMatch = remaining.match(/^([【\[(（])([^】\]）)]+)([】\]）)])/);
        if (bracketMatch) {
            result += wrap('dsl-symbol', bracketMatch[1]);
            const innerContent = bracketMatch[2];
            if (innerContent.includes('|')) {
                const parts = innerContent.split('|');
                result += wrap('dsl-literal', parts[0]);
                result += wrap('dsl-symbol', '|');
                result += wrap('dsl-literal', parts.slice(1).join('|'));
            } else if (/^\d+$/.test(innerContent)) {
                result += wrap('dsl-literal', innerContent);
            } else {
                result += wrap('dsl-literal', innerContent);
            }
            result += wrap('dsl-symbol', bracketMatch[3]);
            remaining = remaining.slice(bracketMatch[0].length);
            matched = true;
            continue;
        }
        
        // 13. = 及其右侧处理：将 = 视为符号，右侧按递归规则处理为字面量或其他
        const equalMatch = remaining.match(/^(=)([^；;@》>《<]*?)([；;]|$)/);
        if (equalMatch) {
            result += wrap('dsl-symbol', '=');
            const content = equalMatch[2];
            if (content) {
                // 如果内容是以括号开始的目标，尽量将内部作为字面量处理
                const targetMatch = content.match(/^([【\[(（][^】\]）)]+[】\]）)])/);
                if (targetMatch) {
                    const innerText = targetMatch[1];
                    // 括号内若不含数字则作为字面量
                    if (!/\d/.test(innerText)) {
                        result += wrap('dsl-literal', innerText);
                    } else {
                        result += highlightDSL(innerText);
                    }
                    const rest = content.slice(targetMatch[1].length);
                    if (rest) {
                        result += highlightDSL(rest);
                    }
                } else {
                    // 其他内容按递归处理
                    result += highlightDSL(content);
                }
            }
            if (equalMatch[3]) {
                result += wrap('dsl-symbol', equalMatch[3]);
            }
            remaining = remaining.slice(equalMatch[0].length);
            matched = true;
            continue;
        }

        // 14. 单独的 @（没有匹配到上面的模式）
        if (remaining[0] === '@') {
            result += wrap('dsl-symbol', '@');
            remaining = remaining.slice(1);
            matched = true;
            continue;
        }
        
        // 15. markdown 反引号 `内容`
        if (remaining[0] === '`') {
            const closeIdx = remaining.indexOf('`', 1);
            if (closeIdx !== -1) {
                result += wrap('dsl-symbol', '`');
                result += highlightDSL(remaining.slice(1, closeIdx));
                result += wrap('dsl-symbol', '`');
                remaining = remaining.slice(closeIdx + 1);
                matched = true;
                continue;
            }
        }
        
        // 16. 标点符号
        if ('~-;；()（）|+、，[]{}'.includes(remaining[0])) {
            result += wrap('dsl-symbol', remaining[0]);
            remaining = remaining.slice(1);
            matched = true;
            continue;
        }
        
        // 17. 其他字符直接输出（已转义）
        if (!matched) {
            result += escapeHtml(remaining[0]);
            remaining = remaining.slice(1);
        }
    }
    
    return result;
}

/**
 * 高亮 diff 代码块
 */
function highlightDiff(code) {
    return code.split('\n').map(line => {
        if (line.startsWith('+')) {
            return `<span class="diff-add">${escapeHtml(line[0])}${highlightDSL(line.slice(1))}</span>`;
        } else if (line.startsWith('-')) {
            return `<span class="diff-remove">${escapeHtml(line[0])}${highlightDSL(line.slice(1))}</span>`;
        }
        return highlightDSL(line);
    }).join('\n');
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
