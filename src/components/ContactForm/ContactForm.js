import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactForm.module.css';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import { getContacts } from '../../redux/contacts/contacts-selectors';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        const { name, value } = target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        const contactsNames = getContactsNames();
        if (contactsNames.includes(name.toLowerCase())) {
            alert(`${name} is already in contacts`);
            return;
        }

        // 2-ой вариант поиска существующего имени
        // if (
        //     contacts.find(
        //         contact => contact.name.toLowerCase() === name.toLowerCase(),
        //     )
        // ) {
        //     alert(`${name} is already in contacts`);
        //     return;
        // }

        dispatch(contactsActions.addContact(name, number));
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    const getContactsNames = () => {
        return contacts.reduce((allNames, { name }) => {
            allNames.push(name.toLowerCase());
            return allNames;
        }, []);
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.label}>
                Name
                <input
                    type="text"
                    className={s.input}
                    name="name"
                    value={name}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </label>
            <label className={s.label}>
                Number
                <input
                    type="tel"
                    className={s.input}
                    name="number"
                    value={number}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </label>
            <button
                type="submit"
                className={s.button}
                disabled={name === '' || number === ''}
            >
                Add contact
            </button>
        </form>
    );
}
