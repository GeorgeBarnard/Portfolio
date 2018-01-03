import React from 'react';
import {ReactDOM, render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

import RouterComponent from './components/RouterComponent'

render((
  <RouterComponent />
), document.getElementById('root'));
registerServiceWorker();
