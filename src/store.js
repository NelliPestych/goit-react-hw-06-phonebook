import reducers from "./reduce";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    contacts: reducers
  }
});

export default store;
