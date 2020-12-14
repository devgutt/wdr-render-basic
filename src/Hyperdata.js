'use strict';

function createInstance(defaultData) {

    const DATA = {
        _: defaultData
    }

    async function getData(key) {

        if (key) {
            if (DATA[key] == undefined) {
                DATA[key] = fetch(key)
                    .then(r => r.json());
            }
            return DATA[key];

        } else {
            return DATA['_'];
        }

    }

    async function getValue(url, path) {

        const data = await getData(url);
        const ret = path.split(".").reduce((acc, cur) => acc[(cur+"").trim()], data);
        return ret;
    }

    return {
        replace: (str, mark) => {
            return str.replace(/{{[^{}]+}}/g, mark);
        },
        process: async str => {

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
                        ret.push(await getValue(url, path));
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
    }
}

module.exports = createInstance;

