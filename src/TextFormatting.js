'use strict';

function textFormatting(str) {

    if (str === undefined) return "";
    if (typeof str != 'string') return "";

    const regTop = /(\*\*?|__?|~~|[<>\r\n])|\[([^[]*)\]\(([^(]*)\)|!\[([^[]*)\]\(([^(]*)\)|`([^`]+)`|```([^`]+)```|(#{1,6})\ (.*)/g;

    const closeTag = {};
    const renderTag = tag => {
        if (!closeTag[tag]) {
            closeTag[tag] = true;
            return "<" + tag + ">";
        } else {
            closeTag[tag] = false;
            return "</" + tag + ">";
        }
    };

    return str.replace(regTop, (m, cmd, linkName, linkUrl, imgAlt, imgPath, code, pre, titleNum, title) => {

        if (cmd) {
            if (cmd == '**' || cmd == '__') {
                return renderTag('strong');
            } else if (cmd == '*' || cmd == '_') {
                return renderTag('em');
            } else if (cmd == '~~') {
                return renderTag('del');
            } else if (cmd == '>') {
                return "&gt;";
            } else if (cmd == '<') {
                return "&lt;";
            } else if (cmd == '\n') {
                return "<br>";
            } else {
                return "";
            }
        } else if (linkName) {
            return `<a href='${linkUrl}'>${linkName}</a>`;
        } else if (imgAlt) {
            return `<img src='${imgPath}' alt='${imgAlt}'/>`;
        } else if (code) {
            return `<code>${code}</code>`
        } else if (pre) {
            return `<pre>${pre}</pre>`
        } else if (title) {
            return `<h${titleNum.length}>${title}</h1>`
        } else {
            return "";
        }
    })
}

module.exports = textFormatting;

