import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/* credentials - назва змінної, об'єкту що передається при виклику (кожен раз різні дані) */

export const register = createAsyncThunk(
  'auth/register',
  async ({ user, email, password }) => {
    try {
      const { data } = await axios.post('/users/signup', {
        name: user /* {"name": "Adrian Cross", "email": "across@mail.com", "password": "examplepwd12345" }*/,
        email,
        password,
      });
      console.log(`це з register`);
      console.log(data);
      token.set(data.token);
      return data;
    } catch (e) {
      console.log(`це з register`);
      return console.log(e.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    console.log(`це з login`);
    console.log(data);
    token.set(data.token);
    return data;
  } catch (e) {
    console.log(`це з login`);
    return console.log(e.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    console.log(`це з logout`);
    console.log(data);
    token.unset();
  } catch (e) {
    console.log(`це з logout`);
    return console.log(e.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      console.log('токен відсутній в local storage');
      // return /* видасть помилку, бо в payload буде передано undefined */
      return thunkAPI.rejectWithValue(); /* примусово відхиляю auth/refresh/pending */
      // return state; /* другий варіант, повернути state */
    }
    token.set(
      persistedToken
    ); /* додаю токен з local storage в заголовок axios.get запиту */
    try {
      const { data } = await axios.get('/users/current');
      console.log(`це з fetchCurrentUser`);
      console.log(data);
      return data;
    } catch (e) {
      console.log(`це з fetchCurrentUser`);
      return console.log(e.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(`це з fetchContacts:`);
      console.log(response.data);
      return response.data;
      // const {data} = await axios.get("/contacts");                      /* з деструктуризацією */
      // return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      console.log(`це з addContact`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log(`це з deleteContact`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
