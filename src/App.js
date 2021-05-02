import { Component } from 'react';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import './styles.css';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
