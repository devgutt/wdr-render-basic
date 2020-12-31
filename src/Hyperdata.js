'use strict';

async function processHyperdata(dataManager, str) {
    const reg = /([\\]?){{\ *(?:\[([^{}]+)\]\ *)?([^{}]+)\ *}}/g;

    const ret = [];
    let match;
    let i = 0;
    while ((match = reg.exec(str)) !== null) {

        const opr = match[1];

        ret.push(str.slice(i, match.index));

        if (opr !== '\\') {
            const url = match[2];
            const path = match[3];
            try {
                ret.push(await getValue(dataManager, url, path));
            } catch (error) {
                ret.push("[ERROR]");
            }
        } else {
            ret.push((match[0] + "").slice(1));
        }

        i = reg.lastIndex;
    }
    ret.push(str.slice(i));

    return ret.join("");
}

async function getValue(dataManager, url, path) {

    const data = url ? await dataManager.getDataUrl(url) : dataManager.data;
    const ret = path.split(".").reduce((acc, cur) => acc[(cur+"").trim()], data);
    return ret;
}

module.exports = processHyperdata;
