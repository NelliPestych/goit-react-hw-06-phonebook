import { createReducer, combineReducers } from "@reduxjs/toolkit";
import actions from "./actions";

const addContact = (state, action) => {
  return [...state, action.payload.contact];
};

const removeContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const items = createReducer([], {
  [actions.addContact]: addContact,
  [actions.removeContact]: removeContact,
});

const filter = createReducer('', {
  [actions.inputChangeContact]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
