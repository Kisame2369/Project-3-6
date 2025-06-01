import { useState, useMemo, useEffect} from 'react'
import './App.css'
import { useDebounce } from 'use-debounce';

import intialContacts from './contacts.json'
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';

function App() {
  
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : intialContacts;
  });
  const [filter, setFilter] = useState('');
  const [debouncedInputValue] = useDebounce(filter, 300);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(debouncedInputValue.toLowerCase())
    );
  }, [debouncedInputValue, contacts]);

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <>
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox text={filter} onChange={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
    </div>

    </>
  )
};

export default App;