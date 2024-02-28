import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import { useState, useEffect } from "react";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [searchedContacts, setSearchedContacts] = useState("");

  const correctedContacts =
    searchedContacts.charAt(0).toUpperCase() +
    searchedContacts.slice(1).toLowerCase();
  const renderContacts = contacts.filter((contact) =>
    contact.name.includes(correctedContacts)
  );

  const deleteContact = (id) => {
    const newContacts = contacts.filter(
      (stableContact) => stableContact.id !== id
    );
    setContacts(newContacts);
  };

  const addContact = (contactToAdd) => {
    setContacts([...contacts, contactToAdd]);
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={addContact} />
        <SearchBox value={searchedContacts} onChange={setSearchedContacts} />
        <ContactList renderContacts={renderContacts} onDelete={deleteContact} />
      </div>
    </>
  );
};

export default App;
