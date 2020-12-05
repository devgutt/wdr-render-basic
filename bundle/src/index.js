import 'core-js/stable';
import 'regenerator-runtime/runtime';

import loader from 'wdr-loader';
import render from '../../src/Render';

import './css/main.css';

loader(data => {
    render(data);
});
