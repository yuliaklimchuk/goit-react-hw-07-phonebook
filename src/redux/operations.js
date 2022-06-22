import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://62b329d14f851f87f455c4e0.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => { 
    const response =  await  axios.get('/contacts')
    return response.data;
});

export const addContact = createAsyncThunk('contacts/addContacts', async contact => {
    const response = await axios.post('/contacts', contact);
    return response.data;
}
);
export const deleteContact = createAsyncThunk('contacts/deleteContacts', async (id) => { 
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
});