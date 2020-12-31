import 'regenerator-runtime/runtime';

import loader from 'wdr-loader';
import render from 'wdr-render-basic';

import './main.css';

loader(data => {
    const dataManager = render.createDataManager(data);

    render.appendElement(document.head, [
        render.createElement('meta', { charset: "utf-8" }),
        render.createElement('meta', { name: "viewport", content: "width=device-width", 'initial-scale': 1 }),
        render.createElement('title', {}, (data['#title'] || data['title']))
    ]);

    if (data['#render'] && data['#render'].css) {
        render.appendElement(document.head, render.createElement('link', { rel: "stylesheet", href: data['#render'].css }));
    }

    const main = render.createElement('main', {});
    render.appendElement(document.body, main);

    renderItem(dataManager, main, '', data, 0);
});

function renderItem(dataManager, parent, key, value, level) {

    if (Array.isArray(value)) {

        const section = render.createElement('div', { class: key });
        render.appendElement(parent, section);

        value.forEach(v => {
            if (typeof v == 'object') {
                const sectionItem = render.createElement('div', {});
                render.appendElement(section, sectionItem);
                renderItem(dataManager, sectionItem, key, v, level);
            } else {
                renderItem(dataManager, section, null, v, level);
            }
        })

    } else if (typeof value == 'object') {

        let p = parent;
        if (level == 1) {
            p = render.createElement('section', { class: key });
            render.appendElement(parent, [render.createElement('a', { name: key }, ""), p]);
        } else if (level > 1) {
            p = render.createElement('div', { class: key });
            render.appendElement(parent, p);
        }

        for (const k in value) {
            if (value.hasOwnProperty(k)) {
                if (k.startsWith('#')) continue;
                renderItem(dataManager, p, k, value[k], level + 1);
            }
        }

    } else {

        if (value !== undefined) {

            let e;
            if (key == 'title') {
                e = render.createElement(`h${level < 6 ? level : '6'}`, { class: key });
            } else {
                e = render.createElement('p', { class: key });
            }
            render.appendElement(parent, e);

            setValue(dataManager, e, value + "");

        }

    }
}

function setValue(dataManager, el, str) {
    if (!str.includes('{{')) {
        el.innerHTML = render.textFormatting(str)
    } else {
        el.innerHTML = render.textFormatting(str.replace(/{{[^{}]+}}/g, "..."));
        render.processHyperData(dataManager, str)
            .then(s => el.innerHTML = render.textFormatting(s))
            .catch(error => {
                console.error(error);
            });
    }
}