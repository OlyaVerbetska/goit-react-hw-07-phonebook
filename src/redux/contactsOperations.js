import axios from 'axios';
import actions from './contactsActions';

axios.defaults.baseURL = 'http://localhost:3004';



const fetchContact = () => dispatch => {
    dispatch(actions.fetchContactRequest());
    axios
    .get(`/contacts`)
    .then((data) => dispatch(actions.fetchContactSuccess(data)))
    .catch(error => dispatch(actions.fetchContactError(error)));
}

const addContact = ({ name, number }) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

const deleteContact = (id) => dispatch => {
    dispatch(actions.deleteContactRequest());
    axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
}


//eslint-disable-next-line
export default {fetchContact, addContact, deleteContact };
