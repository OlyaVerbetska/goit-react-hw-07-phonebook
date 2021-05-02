import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contactsActions';

const {addContactRequest, addContactSuccess, addContactError,deleteContactRequest,
  deleteContactSuccess,
  deleteContactError } = actions;

const contacts = {
  items: [],
  filter: '',
};

const items = createReducer(contacts.items, {
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: ()=> false, 
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: ()=> false, 
  [deleteContactError]: () => false,

})

const filter = createReducer(contacts.filter, {
  [actions.changeFilter]: (_, { payload }) => payload,
});

//eslint-disable-next-line
export default combineReducers({
  items,
  filter,
  loading,
});
