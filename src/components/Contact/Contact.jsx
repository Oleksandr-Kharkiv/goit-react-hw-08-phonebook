import PropTypes from 'prop-types';
import { useDispatch} from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  ContactComponent,
  ContactTel,
  DelContactBtn,
  ContactName,
} from './Contacts.styled';


const Contact = ({ id, name, number}) => {
  const dispatch = useDispatch();

  return (
    <ContactComponent key={id}>
      <ContactName>
        {name}: <ContactTel href="tel:({number})">{number}</ContactTel>
      </ContactName>
      <DelContactBtn onClick={() => dispatch(deleteContact(id))}>Delete</DelContactBtn>
    </ContactComponent>
  );
};

export default Contact

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };






// ========================== варіант css-модулі ==================

// import PropTypes from 'prop-types';
// import css from './Contact.module.css';

// export const Contact = ({ id, name, number, deleteContact }) => {
//   return (
//     <li className={css.contactItem} key={id}>
//       <span>
//         {name}:{' '}
//         <a href="tel:({number})" className={css.tel}>
//           {number}
//         </a>
//       </span>
//       <button className={css.btnDel} onClick={() => deleteContact(id)}>
//         Delete
//       </button>
//     </li>
//   );
// };

// Contact.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
