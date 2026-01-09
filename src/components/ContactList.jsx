import Contact from './Contact'


const ContactList = ({ contacts, onDelete }) => {
    return (
        <>
            <ul className="contact-list">
                {contacts.map((contactItem) => (
                    <li key={contactItem.id}>
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