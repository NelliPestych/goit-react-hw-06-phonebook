import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Phonebook from "./phonebookFolder/Phonebook";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Phonebook />
  </Provider>,
  document.getElementById("root")
);

