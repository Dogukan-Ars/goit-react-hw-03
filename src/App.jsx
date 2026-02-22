
import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import contacts from './contacts.json'

const INITIAL_CONTACTS = contacts;
const LOCAL_STORAGE_KEY = 'phonebook_contacts';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [contactList, setContactList] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : INITIAL_CONTACTS;
  })

  useEffect(() => {
    if (contactList.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactList));
    }
  }, [contactList])

  const handleAddContact = (newContact) => {
    setContactList(prev => [...prev, newContact])
  }

  const handleDeleteContact = (id) => {
    setContactList(prev => prev.filter(contact => contact.id !== id))
  }

  const filteredContacts = contactList.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Phonebook</h1>

      <ContactForm
        onAddContact={handleAddContact}
      />

      <SearchBox
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <ContactList
        contacts={filteredContacts}
        onDelete={handleDeleteContact}
      />
    </div>
  )
}

export default App
