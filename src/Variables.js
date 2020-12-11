'use strict';

function createVariables(defaultData) {

    const data = {
        _: defaultData
    }

    async function getData(key) {

        if (key) {
            if (data[key] == undefined) {
                console.log('NEW DATABASE --- ', key);

                data[key] = fetch(key)
                    .then(x => new Promise(resolve => setTimeout(() => resolve(x), Math.random()*10000)))
                    .then(r => r.json());
            }
            return data[key];

        } else {
            return data['_'];
        }

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
                    const d = await getData(url);

                    ret.push(`[[[${url || ""}@${path}]]]`);
                    
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

