'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

const mountNode = document.getElementById('root');

ReactDOM.render(
  <HelloWorld />,
  mountNode
);
