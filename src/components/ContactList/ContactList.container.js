import { connect } from 'react-redux';

import ContactList from '../ContactList/ContactList';

import {contactOperations,contactSelectors } from '../../redux/contacts'


const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactOperations.fetchContacts()),
});

const mapStateToProps = state => ( {
  contactsForList: contactSelectors.getVisibleContacts(state),
  isLoadingContacts: contactSelectors.getLoading(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
