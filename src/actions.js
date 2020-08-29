import { createAction } from '@reduxjs/toolkit';
// import types from "./types";
import { uuid } from "uuidv4";

const addContact = createAction("contact/add", () => ({
  payload: {
    contact: {
      id: uuid(),
      name: "",
      number: "",
    },
  },
}))


// const addContact = () => ({
//   type: types.ADD,
//   payload: {
//     contact: {
//       id: uuid(),
//       name: "",
//       number: "",
//     },
//   },
// });

const removeContact = createAction("contact/remove");

// const removeContact = (contactId) => ({
//   type: types.REMOVE_CONTACT,
//   payload: {
//     contactId,
//   },
// });
const inputChangeName = createAction("contact/name");
// const inputChangeName = (name) => ({
//   type: types.SEARCH_NAME,
//   payload: {
//     name,
//   },
// });
const inputChangeNumber = createAction("contact/number");
// const inputChangeNumber = (number) => ({
//   type: types.SEARCH_NUMBER,
//   payload: {
//     number,
//   },
// });
const inputChangeContact = createAction("contact/search");
// const inputChangeContact = (search) => ({
//   type: types.SEARCH_CONTACT,
//   payload: {
//     search,
//   },
// });

export default {
  addContact,
  removeContact,
  inputChangeName,
  inputChangeNumber,
  inputChangeContact,
};
