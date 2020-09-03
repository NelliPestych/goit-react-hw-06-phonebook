import { createAction } from '@reduxjs/toolkit';
import { uuid } from "uuidv4";

const addContact = createAction("contact/add", ({ name, number }) => ({
  payload: {
    contact: {
      id: uuid(),
      name,
      number,
    },
  },
}))

const removeContact = createAction("contact/remove");
const inputChangeContact = createAction("contact/search");


export default {
  addContact,
  removeContact,
  inputChangeContact,
};
