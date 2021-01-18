import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={s.contactItem}>
                    <ContactItem name={name} number={number} id={id} />
                </li>
            ))}
        </ul>
    );
};

const getVisibleContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getVisibleContacts(items, filter),
});

export default connect(mapStateToProps, null)(ContactList);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
};
