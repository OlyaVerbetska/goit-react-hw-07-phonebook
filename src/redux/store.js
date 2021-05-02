import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contactsReducer';

const middleware = getDefaultMiddleware();
//store

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  // комментируем, чтоб было удобно проверять
  // devTools: process.env.NODE_ENV === 'development',
});

//eslint-disable-next-line
export default { store };
