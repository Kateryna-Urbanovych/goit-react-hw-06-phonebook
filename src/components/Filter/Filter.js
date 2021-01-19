import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const Filter = () => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <label className={s.label}>
            Find contacts by name
            <input
                type="text"
                className={s.input}
                value={value}
                onChange={event =>
                    dispatch(contactsActions.changeFilter(event.target.value))
                }
                autoComplete="off"
            />
        </label>
    );
};

export default Filter;
