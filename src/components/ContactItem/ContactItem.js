import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import * as contactsActions from '../../redux/contacts/contacts-actions';

const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch();
    return (
        <>
            {name}: {number}
            <button
                type="button"
                className={s.btnDelete}
                onClick={() => dispatch(contactsActions.deleteContact(id))}
            >
                Delete
            </button>
        </>
    );
};

export default ContactItem;

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
