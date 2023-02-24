import React from 'react';
import BalanceReducer from '../reducers/balanceReducer';
import ListReducer from '../reducers/listReducer';
import { createStore, combineReducers } from 'redux';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['balance', 'list']
};

const combineReducer = combineReducers({
  balance: BalanceReducer,
  list: ListReducer
});

export const store = createStore(persistReducer(persistConfig, combineReducer));
export const persistor = persistStore(store);

// export default { store, persistor };
