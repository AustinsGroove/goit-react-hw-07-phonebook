import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './sliceContacts/slice';
import { filterReducer } from './sliceFilter/sliceFilter';

const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          'contacts/addContact/fulfilled',
          'contacts/deleteContact/fulfilled',
        ],
      },
    }),
});
