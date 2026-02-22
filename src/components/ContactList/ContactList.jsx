import Contact from '../Contact/Contact'
import style from './ContactList.module.css'

const ContactList = ({ contacts, onDelete }) => {
    return (
        <>
            <ul className={style.contactList}>
                {contacts.map((contactItem) => (
                    <li key={contactItem.id}
                        className={style.contactListItem}
                    >
                        <Contact contact={contactItem}
                            onDelete={onDelete}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ContactList