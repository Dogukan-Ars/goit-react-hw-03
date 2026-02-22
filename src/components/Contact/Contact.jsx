import { FaPhone, FaTrash, FaUser } from 'react-icons/fa6';
import style from './Contact.module.css'

const Contact = ({ contact, onDelete }) => {
    const { id, name, number } = contact;
    return (
        <div className={style.contactBody}>
            <div className={style.contactTitle}>
                <h2 className={style.contactName} id={id}><FaUser /> {name}</h2>
                <h2 className={style.contactNumber} id={id}><FaPhone /> {number}</h2>
            </div>
            <div className={style.contactButton}>
                <button onClick={() => onDelete(id)} className={style.deleteButton}><FaTrash /></button>
            </div>
        </div>
    )
}

export default Contact