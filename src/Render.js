'use strict';

const el = require('./Elements.js');
const textFormatting = require('./TextFormatting.js');

function render(data) {

    el.append(document.head, [
        el.create('meta', {charset: "utf-8"}),
        el.create('meta', {name: "viewport", content: "width=device-width", 'initial-scale': 1}),
        el.create('title', {}, (data['#info'] && data['#info'].title) || (data['title']))
    ]);

    renderItem(document.body, '', data, 0);
}

function renderItem(parent, key, value, level) {

        if (Array.isArray(value)) {

            const section = el.create('div', {});
            el.append(parent, section);

            value.forEach(v => {
                if (typeof v == 'object') {
                    const sectionItem = el.create('div', {class: "array-item"});
                    el.append(section, sectionItem);
                    renderItem(sectionItem, '', v, level);
                } else {
                    renderItem(parent, '', v, level);
                }
            })

        } else if (typeof value == 'object') {

            const section = el.create(level == 0 ? 'section' : 'div', {});
            el.append(parent, section);

            for (const k in value) {
                if (value.hasOwnProperty(k)) {
                    if (k.startsWith('#')) continue;
                    renderItem(section, k, value[k], level + 1);
                }
            }

        } else {

            if (key == 'title') {
                el.append(parent, el.create(`h${level < 6 ? level+1 : '6'}`, {innerHTML: textFormatting(value)}));
            } else if (key == 'img') {
                el.append(parent, el.create('img', {src: value}));
            } else if (key == 'code') {
                el.append(parent, el.create('pre', {}, value));
            } else {
                el.append(parent, el.create('p', {innerHTML: textFormatting(value + "")}));
            }

        }
}

module.exports = render;