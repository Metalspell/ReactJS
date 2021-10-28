import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers';
import initialState from './Store/initialState';

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
