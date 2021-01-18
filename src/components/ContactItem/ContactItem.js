import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import * as contactsActions from '../../redux/contacts/contacts-actions';

const ContactItem = ({ name, number, id, onDeleteContact }) => {
    return (
        <>
            {name}: {number}
            <button
                type="button"
                className={s.btnDelete}
                onClick={() => onDeleteContact(id)}
            >
                Delete
            </button>
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactItem);

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};
