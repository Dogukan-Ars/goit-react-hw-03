const Contact = ({ contact, onDelete }) => {
    const { id, name, number } = contact;
    return (
        <>
            <div>
                <h2 id={id}>Name: {name}</h2>
                <h2 id={id}>Number: {number}</h2>
            </div>
            <div>
                <button onClick={() => onDelete(id)} >Delete</button>
            </div>
        </>
    )
}

export default Contact