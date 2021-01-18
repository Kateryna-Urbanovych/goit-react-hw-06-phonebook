import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';

const persistConfig = {
    key: 'rootReducer',
    storage,
};

const rootReducer = combineReducers({
    contacts: contactsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store);

export { store, persistor };

// пример state
// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
