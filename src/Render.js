'use strict';

const el = require('./Elements.js');
const textFormatting = require('./TextFormatting.js');

const createDataManager = require('./DataManager.js');
const processHyperData = require('./Hyperdata.js');

let dataManager;

function render(data) {

    dataManager = createDataManager(data);

    el.append(document.head, [
        el.create('meta', { charset: "utf-8" }),
        el.create('meta', { name: "viewport", content: "width=device-width", 'initial-scale': 1 }),
        el.create('title', {}, (data['#title'] || data['title']))
    ]);

    if (data['#render'] && data['#render'].css) {
        el.append(document.head, el.create('link', { rel: "stylesheet", href: data['#render'].css }));
    }

    const main = el.create('main', {});
    el.append(document.body, main);

    renderItem(main, '', data, 0);
}

function renderItem(parent, key, value, level) {

    if (Array.isArray(value)) {

        const section = el.create('div', { class: key });
        el.append(parent, section);

        value.forEach(v => {
            if (typeof v == 'object') {
                const sectionItem = el.create('div', {});
                el.append(section, sectionItem);
                renderItem(sectionItem, key, v, level);
            } else {
                renderItem(section, null, v, level);
            }
        })

    } else if (typeof value == 'object') {

        let p = parent;
        if (level == 1) {
            p = el.create('section', { class: key });
            el.append(parent, [el.create('a', { name: key }, ""), p]);
        } else if (level > 1) {
            p = el.create('div', { class: key });
            el.append(parent, p);
        }

        for (const k in value) {
            if (value.hasOwnProperty(k)) {
                if (k.startsWith('#')) continue;
                renderItem(p, k, value[k], level + 1);
            }
        }

    } else {

        if (value !== undefined) {

            let e;
            if (key == 'title') {
                e = el.create(`h${level < 6 ? level : '6'}`, { class: key });
            } else {
                e = el.create('p', { class: key });
            }
            el.append(parent, e);

            setValue(e, value + "");

        }

    }
}

function setValue(el, str) {
    if (!str.includes('{{')) {
        el.innerHTML = textFormatting(str)
    } else {
        el.innerHTML = textFormatting(str.replace(/{{[^{}]+}}/g, "..."));
        processHyperData(dataManager, str)
            .then(s => el.innerHTML = textFormatting(s))
            .catch(error => {
                console.error(error);
            });
    }
}

module.exports = render;