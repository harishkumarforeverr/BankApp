import React from 'react';
import ReactDOM from 'react-dom'; 
import { store, persistor } from './store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter } from "react-router-dom";
import BankApp from './BankApp';
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <BrowserRouter>
    <BankApp />
    </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
