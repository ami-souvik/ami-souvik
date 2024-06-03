import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { configReducer } from '@slice';
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
  config: configReducer
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.NODE_ENV !== 'production'
});

export const persistor = persistStore(store);
