// import actionTypes from './types';
//import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';


const fetchContactRequest = createAction('contacts/fetch_Request');
const fetchContactSuccess = createAction('contacts/fetch_Success');
const fetchContactError = createAction('contacts/fetch_Error');

const addContactRequest = createAction('contacts/add_Request');
const addContactSuccess = createAction('contacts/add_Success');
const addContactError = createAction('contacts/add_Error');

const deleteContactRequest = createAction('contacts/delete_Request');
const deleteContactSuccess = createAction('contacts/delete_Success');
const deleteContactError = createAction('contacts/delete_Error');

//const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

//eslint-disable-next-line
export default {

  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,

  changeFilter,
};
