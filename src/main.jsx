import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.scss';

import App from './App.jsx';

const root = document.getElementById('app');
ReactDom.render(<App />, root);
