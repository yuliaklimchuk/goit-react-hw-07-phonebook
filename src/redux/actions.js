import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction('contacts/filter');

export const contactsActions = {
    changeFilter
};