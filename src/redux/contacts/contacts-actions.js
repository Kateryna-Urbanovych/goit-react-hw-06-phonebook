import shortid from 'shortid';
import contactsTypes from './contacts-types';

export const addContact = (name, number) => ({
    type: contactsTypes.ADD,
    payload: {
        id: shortid.generate(),
        name,
        number,
    },
});

export const deleteContact = contactId => ({
    type: contactsTypes.DELETE,
    payload: contactId,
});

export const changeFilter = value => ({
    type: contactsTypes.CHANGE_FILTER,
    payload: value,
});
