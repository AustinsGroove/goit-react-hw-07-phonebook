import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsApi, addContactApi, deleteContactApi } from 'api/contacts';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await getContactsApi();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await addContactApi(contact);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await deleteContactApi(id);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
