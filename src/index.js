import React from 'react';
import ReactDOM from 'react-dom';
import Main from './component/main';
import './index.css';
var marked = require('marked');
console.log(marked('I am using __markdown__.'));
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
