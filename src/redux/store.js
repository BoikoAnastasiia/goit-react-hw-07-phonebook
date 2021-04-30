import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import contactsReducer from '../redux/contacts/contacts-reducer';

const store = configureStore({
  reducer: {
    stateContacts: contactsReducer,
  },

  // devTools: process.env.NODE_ENV === 'development',
});

export default store;
