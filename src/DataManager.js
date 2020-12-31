'use strict';

function createDataManager(defaultData) {

    const DATA = {
        _: defaultData
    }

    async function getData(url) {

        if (url) {
            if (DATA[url] == undefined) {
                DATA[url] = fetch(url)
                    .then(r => r.json());
            }
            return DATA[url];

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
        getData: getData,
        getValue: getValue
    }
}

