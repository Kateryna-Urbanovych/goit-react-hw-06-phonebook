import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

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
        onSubmit(name, number);
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
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

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

// OLD CLASS
// class ContactForm extends Component {
//     state = {
//         name: '',
//         number: '',
//     };

//     handleChange = event => {
//         const { name, value } = event.currentTarget;
//         this.setState({ [name]: value });
//     };

//     handleSubmit = event => {
//         event.preventDefault();
//         this.props.onSubmit(this.state);
//         this.reset();
//     };

//     reset = () => {
//         this.setState({ name: '', number: '' });
//     };

//     render() {
//         const { name, number } = this.state;

//         return (
//             <form onSubmit={this.handleSubmit} className={s.form}>
//                 <label className={s.label}>
//                     Name
//                     <input
//                         type="text"
//                         className={s.input}
//                         name="name"
//                         value={name}
//                         onChange={this.handleChange}
//                         autoComplete="off"
//                     />
//                 </label>
//                 <label className={s.label}>
//                     Number
//                     <input
//                         type="tel"
//                         className={s.input}
//                         name="number"
//                         value={number}
//                         onChange={this.handleChange}
//                         autoComplete="off"
//                     />
//                 </label>
//                 <button
//                     type="submit"
//                     className={s.button}
//                     disabled={name === '' || number === ''}
//                 >
//                     Add contact
//                 </button>
//             </form>
//         );
//     }
// }
