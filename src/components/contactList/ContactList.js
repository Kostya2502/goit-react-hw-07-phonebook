import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import style from './ContactList.module.css';
import './ContactList.css';
import { deleteContact, getContacts } from '../../redux/operations';
import { filterContactsByName } from '../../redux/selectors';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(filterContactsByName);

    useEffect(() => {
        dispatch(getContacts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const ondeleteContact = id => dispatch(deleteContact(id));

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
