import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createReduxStore} from './redux';
import './index.css';

import App from './App';

ReactDOM.render(
  <Provider store={createReduxStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
