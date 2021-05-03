import axios from 'axios';
import actions from './contactsActions';
axios.defaults.baseURL = 'http://localhost:3004';

const fetchContact = () => async dispatch => {
  dispatch(actions.fetchContactRequest());

  try {
    const { data } = await axios.get(`/contacts`);
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error));
  }
};

const addContact = ({ name, number }) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};

//eslint-disable-next-line
export default { fetchContact, addContact, deleteContact };



// axios
//   .get(`/contacts`)
//   .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
//   .catch(error => dispatch(actions.fetchContactError(error)));

// axios
//   .post('/contacts', contact)
//   .then(({ data }) => dispatch(actions.addContactSuccess(data)))
//   .catch(error => dispatch(actions.addContactError(error)));

// axios
//   .delete(`/contacts/${id}`)
//   .then(() => dispatch(actions.deleteContactSuccess(id)))
//   .catch(error => dispatch(actions.deleteContactError(error)));
