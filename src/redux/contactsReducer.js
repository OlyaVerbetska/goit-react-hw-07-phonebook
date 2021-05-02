import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import actionTypes from './types';
import actions from './contactsActions';

const contacts = {
  items: [],
  filter: '',
};

const items = createReducer(contacts.items, {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer(contacts.filter, {
  [actions.changeFilter]: (_, { payload }) => payload,
});

//eslint-disable-next-line
export default combineReducers({
  items,
  filter,
});
