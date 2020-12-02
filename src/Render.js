'use strict';

const el = require('./Elements.js');
const textFormatting = require('./TextFormatting.js');

function render(data) {

    el.append(document.head, [
        el.create('meta', {charset: "utf-8"}),
        el.create('meta', {name: "viewport", content: "width=device-width", 'initial-scale': 1}),
        el.create('title', {}, (data['#info'] && data['#info'].title) || (data['title']))
    ]);

    const main = el.create('main', {});
    el.append(document.body, main);
    renderItem(main, '', data, 0);
}

function renderItem(parent, key, value, level) {

        if (Array.isArray(value)) {

            const section = el.create('div', {});
            el.append(parent, section);

            value.forEach(v => {
                if (typeof v == 'object') {
                    const sectionItem = el.create('div', {class: "highlight"});
                    el.append(section, sectionItem);
                    renderItem(sectionItem, key, v, level);
                } else {
                    renderItem(parent, key, v, level);
                }
            })

        } else if (typeof value == 'object') {

            let p = parent;
            if (level == 1) {
                p = el.create('section', {});
                el.append(parent, [ el.create('a', {name: key}, ""), p]);
            } else if (level > 1) {
                p = el.create('div', {});
                el.append(parent, p);
            }

            for (const k in value) {
                if (value.hasOwnProperty(k)) {
                    if (k.startsWith('#')) continue;
                    renderItem(p, k, value[k], level + 1);
                }
            }

        } else {

            if (key == 'title') {
                el.append(parent, el.create(`h${level < 6 ? level : '6'}`, {innerHTML: textFormatting(value)}));
            } else if (key == 'subtitle') {
                el.append(parent, el.create('p', {class: "subtitle", innerHTML: textFormatting(value + "")}));
            } else if (key == 'code') {
                el.append(parent, el.create('pre', {}, value));
            } else {
                el.append(parent, el.create('p', {innerHTML: textFormatting(value + "")}));
            }

        }
}

module.exports = render;