'use strict';

function createDataManager(data) {

    const DATA = {}

    async function getDataUrl(url) {

        if (url) {
            if (DATA[url] == undefined) {
                DATA[url] = fetch(url)
                    .then(r => r.json());
            }
            return DATA[url];
        }
    }

    return {
        data,
        getDataUrl
    }
}

module.exports = createDataManager;
