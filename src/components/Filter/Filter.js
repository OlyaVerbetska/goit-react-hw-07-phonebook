import { v4 as uuidv4 } from 'uuid';
import styles from '../Filter/Filter.module.css';
import { connect } from 'react-redux';

import actions from '../../redux/contactsActions';

const Filter = ({ onFilterValue, value }) => (
  <>
    <p className={styles.filter__title}>Find contacts by name:</p>
    <label htmlFor={uuidv4()} />
    <input
      className={styles.filter__input}
      id={uuidv4()}
      type="text"
      name="filter"
      onChange={onFilterValue}
      value={value}
    />
  </>
);
const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilterValue: e => dispatch(actions.changeFilter(e.currentTarget.value)),
});
export default connect(mapStateToProps,mapDispatchToProps )(Filter);
