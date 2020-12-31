'use strict';

function createDataManager() {

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
        getDataUrl: getDataUrl
    }
}

module.exports = createDataManager;
