import { combineReducers } from 'redux';
import contactsTypes from './contacts-types';

const itemsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case contactsTypes.ADD:
            return [payload, ...state];

        case contactsTypes.DELETE:
            return state.filter(({ id }) => id !== payload);

        default:
            return state;
    }
};

const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case contactsTypes.CHANGE_FILTER:
            return payload;

        default:
            return state;
    }
};

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});

export default contactsReducer;
