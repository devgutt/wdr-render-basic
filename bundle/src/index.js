import 'regenerator-runtime/runtime';

import loader from 'wdr-loader';

const render = require("../../src/Render");

import './main.css';

loader(data => {
    render(data);
});
