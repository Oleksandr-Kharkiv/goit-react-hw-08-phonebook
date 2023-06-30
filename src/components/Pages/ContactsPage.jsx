import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const ContactsPage = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </>
  );
};

export default ContactsPage;
