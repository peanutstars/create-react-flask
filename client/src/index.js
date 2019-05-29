import React from 'react';
import ReactDOM from 'react-dom';
import {Root, SubRoot} from './client/Root';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
ReactDOM.render(<SubRoot />, document.getElementById('subroot'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
