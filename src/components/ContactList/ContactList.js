import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem';

const ContactList = () => {
    const contacts = useSelector(getVisibleContacts);

    return (
        <ul>
            {/* отображает отсутствие контаков */}
            {/* {contacts.length === 0 && <p>No contacts</p>} */}

            {contacts.map(({ id, name, number }) => (
                <li key={id} className={s.contactItem}>
                    <ContactItem name={name} number={number} id={id} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
