const el = require('./src/Elements');

module.exports = {
    createDataManager : require('./src/DataManager'),
    createElement: el.createElement,
    appendElement: el.appendElement,
    loadScript: el.loadScript,
    textFormatting : require('./src/TextFormatting'),
    processHyperdata: require('./src/Hyperdata')
}
