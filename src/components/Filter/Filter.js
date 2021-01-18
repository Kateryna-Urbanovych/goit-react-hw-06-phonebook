import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <label className={s.label}>
            Find contacts by name
            <input
                type="text"
                className={s.input}
                value={value}
                onChange={onChange}
                autoComplete="off"
            />
        </label>
    );
};

const mapStateToProps = state => ({
    value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
    onChange: event =>
        dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
