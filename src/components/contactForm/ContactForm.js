import style from "./ContactForm.module.css";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { allContacts } from "../../redux/selectors";
import { addContact } from "../../redux/operations";

export default function ContactForm() {
    const { register, handleSubmit, errors } = useForm();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const myNamesInItem = useSelector(allContacts);

    const reset = () => {
        setName('');
        setNumber('');
    };

    const onSubmit = () => {
        const getContacts = myNamesInItem.map(contact =>
            contact.name.toLocaleLowerCase(),
        );

        const isGetContactAlready = getContacts.includes(name.toLocaleLowerCase());

        if (isGetContactAlready) {
            reset();
            return alert(`${name} is already in contacts!`);
        }
        dispatch(addContact(name, number));
        reset();
    };

    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                break;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <label className={style.label}>
                Name:
          <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="enter name"
                    onChange={handleChange}
                    className={style.input}
                    ref={register({ required: true })}
                />
            </label>

            {errors.name && errors.name.type === 'required' && (
                <p className={style.warn}>This is required </p>
            )}

            <label className={style.label}>
                Number:
          <input
                    type="tel"
                    name="number"
                    value={number}
                    placeholder="enter number"
                    ref={register({
                        required: true,
                        pattern: /^[0-9]+$/gm,
                    })}
                    onChange={handleChange}
                    className={style.input}
                />
            </label>

            {errors.number && errors.number.type === 'required' && (
                <p className={style.warn}>This is required </p>
            )}

            {errors.number && errors.number.type === 'pattern' && (
                <p className={style.warn}>There must be numbers</p>
            )}

            <button type="submit" className={style.button}>
                Add contact
        </button>
        </form>
    );
}
