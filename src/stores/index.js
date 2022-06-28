import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducer';

// TAMBAHKAN SETUP REDUX PERSIST
// ...

const persistConfig = {
  key: 'root',
  blacklist: ['signup'],
  storage: AsyncStorage,
};
const persistRed = persistReducer(persistConfig, rootReducer);
let store = createStore(persistRed, applyMiddleware(promiseMiddleware, logger));
let persistor = persistStore(store);

export default {store, persistor};
