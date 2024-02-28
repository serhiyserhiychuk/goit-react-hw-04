import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ renderContacts, onDelete }) {
  return (
    <ul className={css.list}>
      {renderContacts.map((contact) => (
        <Contact contact={contact} key={contact.id} onDelete={onDelete} />
      ))}
    </ul>
  );
}
