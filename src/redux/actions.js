import { createAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

// export const addContact = createAction('contact/add', (itemsName, itemsNumber) => ({
//     payload: {
//         id: uuidv4(),
//         name: itemsName,
//         number: itemsNumber,
//     }
// }));

export const addContactRequest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactError = createAction('contact/addContactError');

export const getContactsRequest = createAction('contact/getContactsRequest',);
export const getContactsSuccess = createAction('contact/getContactsSuccess',);
export const getContactsError = createAction('contact/getContactsError');

export const deleteContactRequest = createAction('contact/deleteContactRequest',);
export const deleteContactSuccess = createAction('contact/deleteContactSuccess',);
export const deleteContactError = createAction('contact/deleteContactError');

export const changeFilter = createAction('contact/changeFilter');