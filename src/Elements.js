'use strict';

function createElement(type, attrs, children) {
    const e = createElementDoc(type);
    for (var attr in attrs) {
        const value = attrs[attr];
        if (attr == 'style') {
            for (var st in value) {
                if (value[st] !== undefined) {
                    e.style[st] = value[st];
                }
            }
        } else if (attr == 'innerHTML') {
            e.innerHTML = value;
        } else {
            if (value !== undefined && value !== null) {
                e.setAttribute(attr, value);
            }
        }
    }
    if (children) {
        if (Array.isArray(children)) {
            children.forEach(item => {
                item && e.appendChild(item);
            });
        } else {
            e.innerText = children;
        }
    }
    return e;
}

function createElementDoc(type) {
    switch (type) {
        case 'svg':
        case 'path':
            return document.createElementNS("http://www.w3.org/2000/svg", type);
        default:
            return document.createElement(type);
    }
}

function appendElement(parent, children) {
    if (Array.isArray(children)) {
        children.forEach(item => {
            item && parent.appendChild(item);
        });
    } else {
        parent.appendChild(children);
    }
}

function loadScript(url, onload) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);
    script.onload = onload;
    script.src = url;
}

module.exports = {
    createElement,
    appendElement,
    loadScript
}
