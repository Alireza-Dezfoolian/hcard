import "babel-polyfill";
import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import createLogger from 'redux-logger';
import allReducers from './reducers/all-reducers';

const store = createStore(
  allReducers,
  applyMiddleware(createLogger)
);

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
