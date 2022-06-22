import axios from "axios";
//import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsActions } from './actions';

axios.defaults.baseURL = 'https://62b329d14f851f87f455c4e0.mockapi.io';
const { fetchContactRequest, fetchContactSucces, fetchContactError,addContactRequest, addContactSucces, addContactError,deleteContactRequest,deleteContactSucces,deleteContactError } = contactsActions;

export const fetchContacts = () => dispatch => { 
    dispatch(fetchContactRequest());
    axios.get('/contacts')
        .then(({ data }) => dispatch(fetchContactSucces(data)))
        .catch(error => dispatch(fetchContactError(error)));
    
}


export const addContact = (name, number) => dispatch => {
    const contact = {
        name: name,
        number: number
    }
    dispatch(addContactRequest());

    axios.post('/contacts',contact)
        .then(({ data }) => dispatch(addContactSucces(data)) )
        .catch(error => dispatch(addContactError(error)))
}

export const deleteContact = (id) => dispatch => { 
    dispatch(deleteContactRequest());
    axios.delete(`/contacts/${id}`)
        .then(()=>dispatch(deleteContactSucces(id)))
        .catch(error => dispatch(deleteContactError(error)))
}
