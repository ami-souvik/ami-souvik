import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { folioReducer } from '@slice';

const reducers = {
  folio: folioReducer
}
// const reducers = combineReducers(reducers);

// const persistConfig = {
//   key: 'root'
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: reducers,
  devTools: import.meta.env.NODE_ENV !== 'production'
  // middleware: [thunk]
});

// export const persistor = persistStore(store);
