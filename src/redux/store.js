import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {contactReducer} from './contacts';

const middleware = getDefaultMiddleware();
//store

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware,
  // комментируем, чтоб было удобно проверять
  // devTools: process.env.NODE_ENV === 'development',
});

//eslint-disable-next-line
export default { store };
