import axios from 'axios';
import {
    addContactRequest, addContactSuccess, addContactError,
    getContactsRequest, getContactsSuccess, getContactsError,
    deleteContactRequest, deleteContactSuccess, deleteContactError
} from './actions'


export const addContact = (contactName, contactNumber) => dispatch => {
    const contact = {
        name: contactName,
        number: contactNumber,
    };
    dispatch(addContactRequest());
    axios.post(`${process.env.REACT_APP_BASE_URL}/contacts.json`, contact)
        .then(({ data }) => dispatch(addContactSuccess({ ...contact, id: data.name })))
        .catch((error) => dispatch(addContactError(error)))
}

// export const deleteContact = Id => dispatch => {
//     dispatch(deleteContactRequest());
//     axios.delete(`${process.env.REACT_APP_BASE_URL}/contacts/${id}.json`)
//         .then(() => dispatch(deleteContactSuccess(Id)))
//         .catch(error => dispatch(deleteContactError(error)));
// };

export const deleteContact = id => async dispatch => {
    dispatch(deleteContactRequest());
    try {
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/contacts/${id}.json`);
        dispatch(deleteContactSuccess(id));
    } catch (error) {
        dispatch(deleteContactError(error));
    }
};

export const getContacts = () => async dispatch => {
    dispatch(getContactsRequest());
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/contacts.json`);
        const contacts = Object.keys(data).map((key) => ({
            ...data[key],
            id: key,
        }));
        dispatch(getContactsSuccess(contacts));
    } catch (error) {
        dispatch(getContactsError(error));
    }
};
