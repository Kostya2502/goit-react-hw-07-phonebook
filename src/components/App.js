import React from 'react';
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import { CSSTransition } from 'react-transition-group';
import style from './App.module.css';
import { connect } from "react-redux";

const App = ({ value, contacts }) => {
    return (
        <>
            <CSSTransition in={true} classNames={style} appear={true} timeout={1000} unmountOnExit>
                <h1>Phonebook</h1>
            </CSSTransition>
            <ContactForm />
            <h2>Contacts</h2>
            {(value.length > 0 || contacts.length > 1) && <Filter />}
            <ContactList />
        </>
    );
}

const mapStateToProps = (state) => ({
    value: state.contacts.filter,
    contacts: state.contacts.items,
})

export default connect(mapStateToProps)(App);
