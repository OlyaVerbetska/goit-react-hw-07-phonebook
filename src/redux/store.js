import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contactsReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// reducer

const contactsPersistConfig = {
  key: 'My Contacts',
  storage,
  blacklist: ['filter'],
};

//middleware

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

//store

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
 // комментируем, чтоб было удобно проверять
  // devTools: process.env.NODE_ENV === 'development',
});

let persistor = persistStore(store);

//eslint-disable-next-line
export default { store, persistor };
