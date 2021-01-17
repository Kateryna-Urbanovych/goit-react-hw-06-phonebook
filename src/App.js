import { useState, useEffect } from 'react';
import shortid from 'shortid';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

// Кастомный хук useLocalStorage (для переиспользования кода)
const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(
        () => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue,
    );

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
};
// lazy state initialization - в useState передаем не выражение, а анонимку с выражением, тогда используется этот код только один раз

export default function App() {
    const [contacts, setContacts] = useLocalStorage('contacts', []);
    const [filter, setFilter] = useState('');

    const addContact = (name, number) => {
        const contactsNames = getContactsNames();
        if (contactsNames.includes(name.toLowerCase())) {
            alert(`${name} is already in contacts`);
            return;
        }

        const contact = {
            id: shortid.generate(),
            name,
            number,
        };

        setContacts(state => [contact, ...state]);
    };

    const deleteContact = contactId => {
        setContacts(contacts.filter(contact => contact.id !== contactId));
    };

    const changeFilter = ({ target }) => {
        setFilter(target.value);
    };

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter),
        );
    };

    const getContactsNames = () => {
        return contacts.reduce((allNames, { name }) => {
            allNames.push(name.toLowerCase());
            return allNames;
        }, []);
    };

    return (
        <Container>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={addContact} />

            <h2>Contacts</h2>
            <Filter value={filter} onChange={changeFilter} />
            <ContactList
                contacts={getVisibleContacts()}
                onDeleteContact={deleteContact}
            />
        </Container>
    );
}

// OLD CLASS
// class App extends PureComponent {
//     state = {
//         contacts: [],
//         filter: '',
//     };

//     componentDidMount() {
//         const contacts = JSON.parse(localStorage.getItem('contacts'));
//         if (contacts) {
//             this.setState({ contacts });
//         }
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (this.state.contacts !== prevState.contacts) {
//             localStorage.setItem(
//                 'contacts',
//                 JSON.stringify(this.state.contacts),
//             );
//         }
//     }

//     addContact = ({ name, number }) => {
//         const contactsNames = this.getContactsNames();
//         if (contactsNames.includes(name.toLowerCase())) {
//             alert(`${name} is already in contacts`);
//             return;
//         }

//         const contact = {
//             id: shortid.generate(),
//             name,
//             number,
//         };

//         this.setState(({ contacts }) => ({
//             contacts: [contact, ...contacts],
//         }));
//     };

//     deleteContact = contactId => {
//         this.setState(({ contacts }) => ({
//             contacts: contacts.filter(contact => contact.id !== contactId),
//         }));
//     };

//     changeFilter = event => {
//         this.setState({ filter: event.currentTarget.value });
//     };

//     getVisibleContacts = () => {
//         const { contacts, filter } = this.state;
//         const normalizedFilter = filter.toLowerCase();
//         return contacts.filter(({ name }) =>
//             name.toLowerCase().includes(normalizedFilter),
//         );
//     };

//     getContactsNames = () => {
//         const { contacts } = this.state;
//         return contacts.reduce((allNames, { name }) => {
//             allNames.push(name.toLowerCase());
//             return allNames;
//         }, []);
//     };

//     render() {
//         const { filter } = this.state;
//         const visibleContacts = this.getVisibleContacts();

//         return (
//             <Container>
//                 <h1>Phonebook</h1>
//                 <ContactForm onSubmit={this.addContact} />

//                 <h2>Contacts</h2>
//                 <Filter value={filter} onChange={this.changeFilter} />
//                 <ContactList
//                     contacts={visibleContacts}
//                     onDeleteContact={this.deleteContact}
//                 />
//             </Container>
//         );
//     }
// }
