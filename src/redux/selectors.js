import { createSelector } from '@reduxjs/toolkit';

const allContacts = state => state.contacts.items;

const contactsFilter = state => state.contacts.filter;

const isLoading = state => state.contacts.loading;

const filterContactsByName = createSelector(
    allContacts, contactsFilter,
    (contacts, filter) => {
        const normalizedFilter = filter.toLocaleLowerCase();

        return contacts.filter(({ name }) =>
            name.toLocaleLowerCase().includes(normalizedFilter),
        );
    },
);

export { allContacts, contactsFilter, isLoading, filterContactsByName };