import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'store/sliceContacts/thunks';
import { nanoid } from 'nanoid';
import { selectContacts } from 'store/selectors';
import Wrapper from './InputForm.styled';

const InputForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const existNames = items.map(({ name }) => name.toLowerCase());
    const isExist = existNames.includes(data.name.toLowerCase());
    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    const userData = {
      ...data,
      createdAt: new Date(),
      id: nanoid(),
    };
    dispatch(addContactThunk(userData));
    form.reset();
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="subbmit">Add contact</button>
      </form>
    </Wrapper>
  );
};

export default InputForm;
