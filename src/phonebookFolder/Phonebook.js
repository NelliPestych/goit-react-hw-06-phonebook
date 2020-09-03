import React from "react";
import AddNomber from "../addnomberFolder/addNomber";
import Contacts from "../contactsFolder/Contacts";
import Filter from "../filterFolder/Filter";
import { CSSTransition } from "react-transition-group";
import "./MyStyles.css";

export default class Phonebook extends React.Component {

  render() {
    return (
      <div>
        <CSSTransition
          in={true}
          appear={true}
          classNames="my"
          timeout={500}
          unmountOnExit
        >
          <h1>Phonebook</h1>
        </CSSTransition>
        <AddNomber />
        <p>Search</p>
        <Filter />
        <p>Contacts</p>
        <Contacts />
      </div>
    );
  }
}
