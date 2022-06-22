import { createAction } from "@reduxjs/toolkit";

const fetchContactRequest = createAction('contacts/fetchContactRequest');
const fetchContactSucces = createAction('contacts/fetchContactSucces');
const fetchContactError = createAction('contacts/fetchContactError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSucces = createAction('contacts/addContactSucces');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSucces = createAction('contacts/deleteContactSucces');
const deleteContactError = createAction('contacts/deleteContactError');

const changeFilter = createAction('contacts/filter');

export const contactsActions = {
    fetchContactRequest,
    fetchContactSucces,
    fetchContactError,
    addContactRequest,
    addContactSucces,
    addContactError,
    deleteContactRequest,
    deleteContactSucces,
    deleteContactError,
    changeFilter
};