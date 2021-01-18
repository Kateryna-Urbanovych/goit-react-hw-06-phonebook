import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction('contacts/add', (name, number) => ({
    payload: {
        id: shortid.generate(),
        name,
        number,
    },
}));

export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/changeFilter');
