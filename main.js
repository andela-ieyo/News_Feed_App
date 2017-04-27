import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './public/style.scss';

import App from './src/App';

const root = document.getElementById('app');
ReactDom.render(<App />, root);
