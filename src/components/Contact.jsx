
const Contact = ({ contact, onDelete }) => {
    const { id, name, number } = contact;
    return (
        <div className="contact-body">
            <div className="contact-title">
                <h2 className="contact-name" id={id}>Name: {name}</h2>
                <h2 className="contact-number" id={id}>Number: {number}</h2>
            </div>
            <div className="contact-button">
                <button onClick={() => onDelete(id)} >Delete</button>
            </div>
        </div>
    )
}

export default Contact