import contactReducer from "./reduce";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    contacts: contactReducer
  }
});

export default store;
