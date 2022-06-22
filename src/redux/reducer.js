import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { contactsActions } from "./actions";
import { fetchContacts, addContact, deleteContact } from "./operations";

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload}) =>  payload,
    [addContact.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteContact.fulfilled]: (state, { payload }) => state.filter(contact => contact.id !== payload.id),
});

const filter = createReducer('', {
    [contactsActions.changeFilter]: (_, {payload}) => payload,
})


export default combineReducers({
    items,
    filter
})