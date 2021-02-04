import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' }
];

const items = createReducer(defaultContacts, {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload)
}
);

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({
    items,
    filter,
});