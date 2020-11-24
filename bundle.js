import 'core-js/stable';
import 'regenerator-runtime/runtime';

import loader from 'wdr-loader';

import './css/main.scss';
const render = require('./src/Render.js');

loader(data => {
    render(data);
});