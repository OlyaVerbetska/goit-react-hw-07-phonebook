import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from '../ContactList/ContactList.module.css';
import operations from '../../redux/contactsOperations';
import { Component } from 'react';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }
  render() {
    const { contactsForList, onDeleteContact } = this.props;
    return (
      <ul className={styles.contactList}>
        {contactsForList.length > 0 && (
          <h2 className={styles.contactList__subtitle}> Contacts </h2>
        )}

        {contactsForList.map(contact => (
          <li key={uuidv4()} className={styles.contactList__item}>
            <span className={styles.contactList__elem}> {contact.name}:</span>
            <span>{contact.number} </span>

            <button
              type="button"
              className={styles.contactList__button}
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contactsForList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const getVisibleContacts = (items, filter = '') => {
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(operations.deleteContact(id)),
  fetchContact: () => dispatch(operations.fetchContact()),
});

const mapStateToProps = ({ contacts: { items, filter } }) => {
  const visibleContacts = getVisibleContacts(items, filter);
  return {
    contactsForList: visibleContacts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
