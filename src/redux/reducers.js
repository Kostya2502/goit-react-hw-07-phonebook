import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
    addContactRequest, addContactSuccess, addContactError,
    getContactsRequest, getContactsSuccess, getContactsError,
    deleteContactRequest, deleteContactSuccess, deleteContactError,
    changeFilter
} from './actions'

const items = createReducer([], {
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [getContactsSuccess]: (_, { payload }) => payload,
    [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload)
}
);

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
})

const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [getContactsRequest]: () => true,
    [getContactsSuccess]: () => false,
    [getContactsError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
})

export default combineReducers({
    items,
    filter,
    loading,
});