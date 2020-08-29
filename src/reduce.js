// import types from "./types";
import { createReducer } from "@reduxjs/toolkit";
import initialState from "./initialState";
import actions from "./actions";

const contactReducer = createReducer(initialState.items, {
  [actions.inputChangeName]: (state, action) => ({
    ...state,
    newContact: {
      ...state.newContact,
      name: action.payload,
    },
  }),
  [actions.inputChangeNumber]: (state, action) => ({
    ...state,
    newContact: {
      ...state.newContact,
      number: action.payload,
    },
  }),
  [actions.addContact]: (state, action) => ({
    ...state,
    contactList: [
      ...state.contactList,
      {
        id: action.payload.contact.id,
        name: state.newContact.name,
        number: state.newContact.number,
      },
    ],
  }),

  [actions.removeContact]: (state, action) => ({
    ...state,
    contactList: state.contactList.filter((contact) => contact.id !== action.payload),
  }),

  [actions.inputChangeContact]: (state, action) => ({
    ...state,
    filter: [
      ...state.contactList.filter((contact) => contact.name === action.payload),
    ],
  }),

});

export default contactReducer;
//   state = initialState.items,
//   { type, payload }
// ) {
//   switch (type) {
//     case actions.inputChangeName.type: {
//       return {
//         ...state,
//         newContact: {
//           ...state.newContact,
//           name: payload,
//         },
//       };
//     }

//     case actions.inputChangeNumber.type: {
//       return {
//         ...state,
//         newContact: {
//           ...state.newContact,
//           number: payload,
//         },
//       };
//     }

//     case actions.addContact.type: {
//       return {
//         ...state,
//         contactList: [
//           ...state.contactList,
//           {
//             id: payload.contact.id,
//             name: state.newContact.name,
//             number: state.newContact.number,
//           },
//         ],
//       };
//     }

//     case actions.removeContact.type:
//       return {
//         ...state,
//         contactList: state.contactList.filter(
//           (contact) => contact.id !== payload
//         ),
//       };

//     case actions.inputChangeContact.type: {
//       return {
//         ...state,
//         filter: [
//           ...state.contactList.filter((contact) => contact.name === payload),
//         ],
//       };
//     }

//     default:
//       return state;
//   }
// }
