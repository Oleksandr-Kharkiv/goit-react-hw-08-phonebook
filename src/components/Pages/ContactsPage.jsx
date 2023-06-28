import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

const ContactsPage = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

  return (
    <div className="wrap">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
