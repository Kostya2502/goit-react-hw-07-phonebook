import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import style from './ContactList.module.css';
import './ContactList.css';
import * as contactsActions from '../../redux/actions';

const filterContactsByName = (allContacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return allContacts.filter(({ name }) =>
        name.toLocaleLowerCase().includes(normalizedFilter),
    );
};

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state =>
        filterContactsByName(state.contacts.items, state.contacts.filter),
    );

    const ondeleteContact = id => dispatch(contactsActions.deleteContact(id));

    return (
        <TransitionGroup component='ul' >
            {contacts.map(({ id, name, number }) => (
                < CSSTransition key={id} timeout={400} classNames={style} >
                    <li key={id} className={style.item}>
                        <p >
                            {name}: {number}
                        </p>
                        <button
                            type="button"
                            onClick={() => ondeleteContact(id)}
                            className={style.button}
                        >
                            Delete
                        </button>
                    </li>
                </CSSTransition>
            ))
            }
        </TransitionGroup >
    );
}

export default ContactList;

ContactList.propTypes = {
    onDeleteContact: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
};
