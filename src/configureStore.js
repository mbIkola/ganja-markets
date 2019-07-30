import { compose, createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { AsyncStorage } from 'react-native'


import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userInfo'],
    debug: true
};
const persistedReducer = persistReducer(persistConfig, reducers);


export default function configureStore() {
  let store = createStore(
      persistedReducer,
    	undefined,
    	compose(applyMiddleware(thunk, logger))
  );

  persistStore(store, null, () => store.getState()).purge();
  return store;
}

