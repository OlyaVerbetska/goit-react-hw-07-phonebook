import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from '../ContactList/ContactList.module.css';
import actions from '../../redux/contactsActions';

const ContactList = ({ contactsForList, onDeleteContact }) => (
  <ul className={styles.contactList}>
{contactsForList.length > 0 && <h2 className = {styles.contactList__subtitle}> Contacts </h2> }
    
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

ContactList.propTypes = {
  contactsForList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const getVisibleContacts = (allContacts, filter = '') => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

const mapStateToProps = ({ contacts: { items, filter } }) => {
  const visibleContacts = getVisibleContacts(items, filter);
  return {
    contactsForList: visibleContacts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);