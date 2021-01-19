import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './contacts-actions';

const itemsReducer = createReducer([], {
    [contactsActions.addContact]: (state, { payload }) => [payload, ...state],
    [contactsActions.deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
    [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});

export default contactsReducer;
