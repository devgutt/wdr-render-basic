'use strict';

function createVariables(defaultData) {

    const DATA = {
        _: defaultData
    }

    async function getData(key) {

        if (key) {
            if (DATA[key] == undefined) {
                DATA[key] = fetch(key)
                    .then(x => new Promise(resolve => setTimeout(() => resolve(x), Math.random()*10000)))
                    .then(r => r.json());
            }
            return DATA[key];

        } else {
            return DATA['_'];
        }

    }

    async function getValue(url, path) {

        const data = await getData(url);
        return path.split(".").reduce((acc, cur) => acc[cur.trim()], data);
    }

    return {
        replace: (str, mark) => {
            return str.replace(/{{[^{}]+}}/g, mark);
        },
        process: async str => {

            const reg = /{{\ *(?:\[([^{}]+)\]\ *)?([^{}]+)\ *}}/g;

            const ret = [];
            let match;
            let i = 0;
            while ((match = reg.exec(str)) !== null) {

                const url = match[1];
                const path = match[2];

                ret.push(str.slice(i, match.index));

                try {
                    ret.push(await getValue(url, path));
                } catch (error) {
                    ret.push(`[ERROR]`);
                }

                i = reg.lastIndex;
            }
            ret.push(str.slice(i));

            return ret.join("");
        }
    }
}

module.exports = createVariables;

