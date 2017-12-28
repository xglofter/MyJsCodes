import React from 'react';
import ReactDOM from 'react-dom';
import Happy from './Happy';
import './style.css';
const hello = require('./hello.js');

ReactDOM.render(
  <Happy />,
  document.getElementById('root')
);

document.querySelector("#root").appendChild(hello());
