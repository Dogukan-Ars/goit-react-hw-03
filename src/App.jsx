
import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import SearchBox from './components/SearchBox'
import contacts from './contacts.json'

const INITIAL_CONTACTS = contacts;

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [contactList, setContactList] = useState(() => {
    const savedContacts = localStorage.getItem(INITIAL_CONTACTS);
    return savedContacts ? JSON.parse(savedContacts) : INITIAL_CONTACTS;
  })

  useEffect(() => {
    localStorage.setItem(INITIAL_CONTACTS, JSON.stringify(contactList));
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
    <div>
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
