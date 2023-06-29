// import { useDispatch, useSelector } from 'react-redux'; //  для відправки та отримання даних з лобального state
// import { nanoid } from '@reduxjs/toolkit'; //  для генерації випадкових ID номерів
// import { useState } from 'react'; // для створення локального state
// import { addContact } from 'redux/operations';
import {
  LoginFormComponent,
  FormLabel,
  FormInput,
  FormLoginUserBtn,
} from './LoginForm.styled';
// import { selectContacts } from 'redux/selectors';

export const LoginForm = () => {
  // const [newName, setNewName] = useState(''); /* локальний state для форми (потрібно тільки ім'я для порівнняння з нововведеними даними) */
  // const dispatch = useDispatch();  /* отримую посилання на метод useDispatch() для відправки даних у глобальний state */
  // const myContacts = useSelector(selectContacts);  /* отримую масив об'єктів (контактів) з глобального state */
  // let nameInputId = nanoid();
  // let numberInputId = nanoid();

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   const form = e.target;
  //   setNewName(form.elements.name.value);

  //   let isInMyContacts = myContacts.find(
  //     contact => contact.name.toLowerCase() === newName.toLowerCase()
  //   );

  //   if (isInMyContacts) {
  //     form.reset();
  //     return alert(`${newName} is already in contacts`);
  //   }
  //   const newContact = {
  //     name: form.elements.name.value,
  //     number: form.elements.number.value,
  //   }
  //   dispatch(addContact(newContact));
  //   form.reset();
  // };

  return (
      <LoginFormComponent 
      // onSubmit={handleSubmit} 
      autoComplete="off">
        <FormLabel 
        // htmlFor={nameInputId}
        >
          Login</FormLabel>
        <FormInput
          // id={nameInputId}
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <FormLabel 
        // htmlFor={numberInputId}
        >Password</FormLabel>
        <FormInput
          // id={numberInputId}
          type="tel"
          name="number"
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <FormLoginUserBtn type="submit">Login</FormLoginUserBtn>
      </LoginFormComponent>
  );
};




// ----------------------------------------Функціональні копоненти-------------

// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import {
//   ContactFormComponent,
//   FormLabel,
//   FormInput,
//   FormAddContactBtn,
// } from './ContactForm.styled';

// export const ContactForm = ({ onSubmitForm }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   let nameInputId = nanoid();
//   let numberInputId = nanoid();

//   const handleInputChange = e => {
//     const { name, value } = e.target;
//     if (name === 'name') setName(value);
//     if (name === 'number') setNumber(value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmitForm({ name, number });
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <>
//       <ContactFormComponent onSubmit={handleSubmit} autoComplete="off">
//         <FormLabel htmlFor={nameInputId}>Name</FormLabel>
//         <FormInput
//           id={nameInputId}
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleInputChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />

//         <FormLabel htmlFor={numberInputId}>Number</FormLabel>
//         <FormInput
//           id={numberInputId}
//           type="tel"
//           name="number"
//           value={number}
//           onChange={handleInputChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />

//         <FormAddContactBtn type="submit">Add to contact</FormAddContactBtn>
//       </ContactFormComponent>
//     </>
//   );
// };

// ContactForm.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired,
// };

// -------------------------------------------Класові компоненти--------------------

// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import {ContactFormComponent, FormLabel, FormInput, FormAddContactBtn} from './ContactForm.styled';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <>
//         <ContactFormComponent onSubmit={this.handleSubmit} autoComplete="off">
//           <FormLabel htmlFor={this.nameInputId}>Name</FormLabel>
//           <FormInput
//             id={this.nameInputId}
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleInputChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />

//           <FormLabel htmlFor={this.numberInputId}>Number</FormLabel>
//           <FormInput
//             id={this.numberInputId}
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleInputChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />

//           <FormAddContactBtn type="submit">
//             Add to contact
//           </FormAddContactBtn>
//         </ContactFormComponent>
//       </>
//     );
//   }
// }

// ========================== варіант css-модулі ==================

// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import css from './ContactForm.module.css';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit} autoComplete="off">
//           <label htmlFor={this.nameInputId}>Name</label>
//           <input
//             id={this.nameInputId}
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleInputChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />

//           <label htmlFor={this.numberInputId}>Number</label>
//           <input
//             id={this.numberInputId}
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleInputChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />

//           <button type="submit" className={css.btn}>
//             Add to contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }
