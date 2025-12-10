/**
 * MissFisher DSL (Angex) 语法高亮器
 * 基于 AngexConverter.cs 中的语法定义
 * 使用粗粒度正则匹配整个语法块
 * 
 * 颜色规则：
 * - 钓法基本模式(平钓/大鱼/耐心) = 函数 #dcdcaa
 * - 【钓饵】括号 = 标识符 #dcdcdc, 内容 = 变量 #9cdcfe
 * - @窗口期(时间+天气) = 控制流关键字 #d8a0df
 * - 》(阶段分隔符) = 控制流关键字 #d8a0df
 * - 《(游动饵/阶段结束) = 函数 #dcdcaa
 * - (额外咬饵类型) = 控制流关键字 #d8a0df
 * - 咬饵时间(数字+~-) = 变量 #9cdcfe
 * - 咬饵类型(!！+/全部) = 控制流关键字 #d8a0df
 * - 提钩类型(强力/精准等) = 标识符 #dcdcdc
 * - @拍水/专一: @XX=函数 #dcdcaa, 数字=变量 #9cdcfe, 咬饵类型=控制流 #d8a0df, 【目标】=与钓饵相同
 * - 【目标鱼】括号 = 标识符 #dcdcdc, 内容 = 变量 #9cdcfe
 * - =后；前不含数字的【内容】 = 控制流关键字 #d8a0df
 * - =前后无》《时 = 控制流关键字 #d8a0df, 否则 = 标识符 #dcdcdc
 * - =后的手法修饰词 = 修饰词 #b8d7a3
 * - // 注释 = 注释 #57a64a
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
        
        // 2. 钓法基本模式 + 可选的【钓饵】
        const modeWithBaitMatch = remaining.match(new RegExp(
            `^(${钓法模式})([【\\[(（])([^】\\]）)]+)([】\\]）)])`, 'i'
        ));
        if (modeWithBaitMatch) {
            result += wrap('dsl-keyword', modeWithBaitMatch[1]); // 钓法基本模式 = 函数色
            if (modeWithBaitMatch[2]) {
                // 【钓饵】：括号是标识符色，内容是变量色
                result += wrap('dsl-identifier', modeWithBaitMatch[2]); // 开括号
                const baitContent = modeWithBaitMatch[3];
                // 检查是否有 | 分隔符
                if (baitContent.includes('|')) {
                    const parts = baitContent.split('|');
                    result += wrap('dsl-function', parts[0]);
                    result += wrap('dsl-identifier', '|');
                    result += wrap('dsl-function', parts.slice(1).join('|'));
                } else {
                    result += wrap('dsl-function', baitContent);
                }
                result += wrap('dsl-identifier', modeWithBaitMatch[4]); // 闭括号
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
        // 细粒度处理：@ = 控制流，数字 = 变量，分隔符 = 标识符，括号 = 标识符，天气 = 变量
        const windowMatch = remaining.match(/^@(\d{4})([~-])(\d{4})?([（(])([^）)]+)([）)])/);
        if (windowMatch) {
            result += wrap('dsl-identifier', '@'); // @
            result += wrap('dsl-control-flow', windowMatch[1]); // 开始时间数字
            result += wrap('dsl-identifier', windowMatch[2]); // 分隔符 ~-
            if (windowMatch[3]) {
                result += wrap('dsl-control-flow', windowMatch[3]); // 结束时间数字
            }
            result += wrap('dsl-identifier', windowMatch[4]); // 开括号
            // 处理天气内容，可能包含、或|分隔符
            const weatherContent = windowMatch[5];
            const weatherParts = weatherContent.split(/([、|])/);
            for (const part of weatherParts) {
                if (part === '、' || part === '|') {
                    result += wrap('dsl-identifier', part); // 分隔符
                } else if (part) {
                    result += wrap('dsl-control-flow', part); // 天气名称
                }
            }
            result += wrap('dsl-identifier', windowMatch[6]); // 闭括号
            remaining = remaining.slice(windowMatch[0].length);
            matched = true;
            continue;
        }
        // 只有时间没有天气：@数字~数字
        const timeOnlyMatch = remaining.match(/^@(\d{4})([~-])(\d{4})/);
        if (timeOnlyMatch) {
            result += wrap('dsl-identifier', '@');
            result += wrap('dsl-control-flow', timeOnlyMatch[1]);
            result += wrap('dsl-identifier', timeOnlyMatch[2]);
            result += wrap('dsl-control-flow', timeOnlyMatch[3]);
            remaining = remaining.slice(timeOnlyMatch[0].length);
            matched = true;
            continue;
        }
        // 只有天气没有时间：@（天气）
        const weatherOnlyMatch = remaining.match(/^@([（(])([^）)]+)([）)])/);
        if (weatherOnlyMatch) {
            result += wrap('dsl-identifier', '@');
            result += wrap('dsl-identifier', weatherOnlyMatch[1]); // 开括号
            // 处理天气内容
            const weatherContent = weatherOnlyMatch[2];
            const weatherParts = weatherContent.split(/([、|])/);
            for (const part of weatherParts) {
                if (part === '、' || part === '|') {
                    result += wrap('dsl-identifier', part);
                } else if (part) {
                    result += wrap('dsl-control-flow', part);
                }
            }
            result += wrap('dsl-identifier', weatherOnlyMatch[3]); // 闭括号
            remaining = remaining.slice(weatherOnlyMatch[0].length);
            matched = true;
            continue;
        }
        
        // 4. @拍水段: @拍水...【目标】
        // 格式: @拍水 数字+数字~数字+数字 !!! 强力 【目标】
        const surfaceMatch = remaining.match(new RegExp(`^@(${拍水模式})`, 'i'));
        if (surfaceMatch) {
            result += wrap('dsl-identifier', '@'); // @
            result += wrap('dsl-function', surfaceMatch[1]); // 拍水/ss = 函数色
            remaining = remaining.slice(surfaceMatch[0].length);
            matched = true;
            continue;
        }
        
        // 5. @专一段: @专一【目标】提钩类型
        // 格式: @专一【目标】强力
        const focusMatch = remaining.match(new RegExp(`^@(${专一模式})`, 'i'));
        if (focusMatch) {
            result += wrap('dsl-identifier', '@'); // @
            result += wrap('dsl-function', focusMatch[1]); // 专一/ic = 函数色
            remaining = remaining.slice(focusMatch[0].length);
            matched = true;
            continue;
        }
        
        // 6. @阶段/鱼识/拍水后: @阶段=》...《= 或 @鱼识=》... 或 @拍水后=》...
        const specialAtMatch = remaining.match(new RegExp(
            `^(@(?:${阶段模式}|${鱼识模式}|${拍水后模式})=)`, 'i'
        ));
        if (specialAtMatch) {
            result += wrap('dsl-control-flow', specialAtMatch[0]);
            remaining = remaining.slice(specialAtMatch[0].length);
            matched = true;
            continue;
        }
        
        // 7. 》阶段分隔符（特殊处理，作为标识符）
        if (remaining[0] === '》' || remaining[0] === '>') {
            result += wrap('dsl-control-flow', remaining[0]);
            remaining = remaining.slice(1);
            matched = true;
            continue;
        }
        
        // 8. 《（用于游动饵目标标记或阶段结束）
        if (remaining[0] === '《' || remaining[0] === '<') {
            result += wrap('dsl-function', remaining[0]);
            remaining = remaining.slice(1);
            matched = true;
            continue;
        }
        
        // 9. (额外咬饵类型): (！！) 或 （！！！）
        const extraBiteMatch = remaining.match(/^([（(][!！]{1,3}[)）])/);
        if (extraBiteMatch) {
            result += wrap('dsl-control-flow', extraBiteMatch[1]);
            remaining = remaining.slice(extraBiteMatch[1].length);
            matched = true;
            continue;
        }
        
        // 10. 咬饵时间: 数字.数字+数字~数字+数字
        const timeMatch = remaining.match(/^([\d.]+(?:\+[\d.]+)?(?:[~-][\d.]+(?:\+[\d.]+)?)?)/);
        if (timeMatch && timeMatch[1].length > 0) {
            result += wrap('dsl-variable', timeMatch[1]);
            remaining = remaining.slice(timeMatch[1].length);
            matched = true;
            continue;
        }
        
        // 11. 咬饵类型 + 提钩类型: ！！！强力 或 全部精准
        const biteHookMatch = remaining.match(new RegExp(
            `^((?:${全部模式}|[!！+]{1,8})((?:${提钩模式})\\d?)?)`, 'i'
        ));
        if (biteHookMatch) {
            // 咬饵类型部分（全部/叹号）= 函数色
            const biteType = biteHookMatch[1].match(new RegExp(`^(${全部模式}|[!！+]{1,8})`, 'i'));
            if (biteType) {
                result += wrap('dsl-variable', biteType[1]);
            }
            // 提钩类型部分（强力/精准等）= 变量色
            if (biteHookMatch[2]) {
                result += wrap('dsl-identifier', biteHookMatch[2]);
            }
            remaining = remaining.slice(biteHookMatch[0].length);
            matched = true;
            continue;
        }
        
        // 12. 【目标鱼】或【任意内容】（非钓饵位置）
        const bracketMatch = remaining.match(/^([【\[(（])([^】\]）)]+)([】\]）)])/);
        if (bracketMatch) {
            result += wrap('dsl-identifier', bracketMatch[1]);
            // 检查内容是否含有 |（名字|ID格式）
            const innerContent = bracketMatch[2];
            if (innerContent.includes('|')) {
                const parts = innerContent.split('|');
                result += wrap('dsl-variable', parts[0]);
                result += wrap('dsl-identifier', '|');
                result += wrap('dsl-variable', parts.slice(1).join('|'));
            } else if (/^\d+$/.test(innerContent)) {
                result += wrap('dsl-variable', innerContent);
            } else {
                result += wrap('dsl-variable', innerContent);
            }
            result += wrap('dsl-identifier', bracketMatch[3]);
            remaining = remaining.slice(bracketMatch[0].length);
            matched = true;
            continue;
        }
        
        // 13. =【终止目标】；或 =数字【计数目标】；或 =手法修饰词；
        // 前后没有》《的=染成控制流关键字颜色
        const equalMatch = remaining.match(/^(=)([^；;@》>《<]*?)([；;]|$)/);
        if (equalMatch) {
            // 检查=前面是否有》《（通过result末尾判断）
            const prevIsArrow = /[》>《<]$/.test(result.replace(/<[^>]+>/g, ''));
            // 检查=后面是否紧跟》《
            const nextIsArrow = /^[》>《<]/.test(equalMatch[2]);
            
            if (prevIsArrow || nextIsArrow) {
                result += wrap('dsl-identifier', '=');
            } else {
                result += wrap('dsl-control-flow', '=');
            }
            
            const content = equalMatch[2];
            if (content) {
                // 检查是否是【目标】且不含数字（=后；前不含数字的【内容】染成控制流关键字）
                const targetMatch = content.match(/^([【\[(（][^】\]）)]+[】\]）)])/);
                if (targetMatch) {
                    const innerText = targetMatch[1];
                    // 检查【】内是否含有数字
                    if (!/\d/.test(innerText)) {
                        // 不含数字，整个【内容】染成控制流关键字颜色
                        result += wrap('dsl-control-flow', innerText);
                    } else {
                        // 含数字，递归处理
                        result += highlightDSL(innerText);
                    }
                    const rest = content.slice(targetMatch[1].length);
                    if (rest) {
                        result += highlightDSL(rest);
                    }
                } else if (/^\d+[【\[(（]/.test(content)) {
                    // 计数器格式: 数字【目标】
                    const countMatch = content.match(/^(\d+)([【\[(（][^】\]）)]+[】\]）)])(.*)/);
                    if (countMatch) {
                        result += wrap('dsl-number', countMatch[1]);
                        result += highlightDSL(countMatch[2]);
                        if (countMatch[3]) {
                            result += highlightDSL(countMatch[3]);
                        }
                    } else {
                        result += wrap('dsl-modifier', content);
                    }
                } else if (!/[\d【\[\]】()（）]/.test(content)) {
                    // 纯手法修饰词（不含数字和括号）
                    result += wrap('dsl-modifier', content);
                } else {
                    // 其他情况递归处理
                    result += highlightDSL(content);
                }
            }
            if (equalMatch[3]) {
                result += wrap('dsl-identifier', equalMatch[3]);
            }
            remaining = remaining.slice(equalMatch[0].length);
            matched = true;
            continue;
        }

        // 14. 单独的 @（没有匹配到上面的模式）
        if (remaining[0] === '@') {
            result += wrap('dsl-identifier', '@');
            remaining = remaining.slice(1);
            matched = true;
            continue;
        }
        
        // 15. markdown 反引号 `内容`
        if (remaining[0] === '`') {
            const closeIdx = remaining.indexOf('`', 1);
            if (closeIdx !== -1) {
                result += wrap('dsl-identifier', '`');
                result += highlightDSL(remaining.slice(1, closeIdx));
                result += wrap('dsl-identifier', '`');
                remaining = remaining.slice(closeIdx + 1);
                matched = true;
                continue;
            }
        }
        
        // 16. 标点符号
        if ('~-;；()（）|+、，'.includes(remaining[0])) {
            result += wrap('dsl-identifier', remaining[0]);
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
            return `<span class="diff-add">${line[0]}${highlightDSL(line.slice(1))}</span>`;
        } else if (line.startsWith('-')) {
            return `<span class="diff-remove">${line[0]}${highlightDSL(line.slice(1))}</span>`;
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
