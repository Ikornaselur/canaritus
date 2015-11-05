import ReactDOM from 'react-dom';
import React from 'react';
// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
import { Provider } from 'react-redux';

// Grab the state from a global injected into server-generated HTML
// const initialState = window.__INITIAL_STATE__;

// const loggerMiddleware = createLogger({
//   level: 'info',
//   collapsed: true,
// });

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware,
//   loggerMiddleware
// )(createStore);

// Create Redux store with initial state
// const store = createStoreWithMiddleware(pulseApp, initialState);

ReactDOM.render(
//   <Provider store={store}>
  <Provider>
    <div>Hello, world!</div>
  </Provider>,
  document.getElementById('app')
);

// Now that we have rendered...
// setupRealtime(store, actions);

// lets mutate state and set UserID as key from local storage
// store.dispatch(actions.setUserId(getOrSetUserId()));