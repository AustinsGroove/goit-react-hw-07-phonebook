import { api } from './api';

export const getContactsApi = async () => {
  const { data } = await api(`contacts/`);
  return data;
};

export const addContactApi = async contact => {
  const data = api.post(`contacts/`, contact);
  return data;
};

export const deleteContactApi = async id => {
  const data = api.delete(`contacts/${id}`);
  return data;
};
