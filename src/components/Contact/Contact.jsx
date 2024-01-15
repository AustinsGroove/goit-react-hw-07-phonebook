import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/sliceContacts/thunks';
import Wrapper from './Contact.styled';

const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const deleteContactHandler = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <Wrapper>
      <button type="button" onClick={deleteContactHandler}>
        Delete
      </button>
      <p>{name}:</p>
      <p>{phone}</p>
    </Wrapper>
  );
};

export default Contact;
