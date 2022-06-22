import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { contactsActions } from "./actions";

const { fetchContactRequest,fetchContactSucces, fetchContactError,addContactRequest, addContactSucces, addContactError,deleteContactRequest,deleteContactSucces,deleteContactError } = contactsActions;

const items = createReducer([], {
    [fetchContactSucces]: (_, { payload}) =>  payload,
    [addContactSucces]: (state, { payload}) => [...state, payload],
    [deleteContactSucces]: (state, { payload}) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [contactsActions.changeFilter]: (_, {payload}) => payload,
})

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSucces]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSucces]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSucces]: () => false,
    [deleteContactError]: ()=> false
});

export default combineReducers({
    items,
    filter,
    loading
})