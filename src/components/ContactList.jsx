import Contact from './Contact'

const ContactList = ({ contacts, onDelete }) => {
    return (
        <>
            <ul>
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