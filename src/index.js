import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import createLogger from 'redux-logger';
import allReducers from './reducers/all-reducers';

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(createLogger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
