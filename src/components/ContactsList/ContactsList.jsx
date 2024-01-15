import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'store/sliceContacts/thunks';
import { useEffect } from 'react';
import {
  selectError,
  selectIsLoading,
  selectFilteredContacts,
} from 'store/selectors';
import Contact from 'components/Contact/Contact';
import Wrapper from './ContactsList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Wrapper>
      <ul>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <li key={id}>
              <Contact name={name} phone={phone} id={id} />
            </li>
          );
        })}
      </ul>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
    </Wrapper>
  );
};

export default ContactsList;
