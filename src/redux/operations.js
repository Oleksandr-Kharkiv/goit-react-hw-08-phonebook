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
  async ({ user, email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', {
        name: user /* {"name": "Adrian Cross", "email": "across@mail.com", "password": "examplepwd12345" }*/,
        email,
        password,
      });
      // console.log(`register`);
      // console.log(data);
      token.set(data.token);
      return data;
    } catch (e) {
      // console.log(`register`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    // console.log(`login`);
    // console.log(data);
    token.set(data.token);
    return data;
  } catch (e) {
    // console.log(`login`);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // console.log(`logout`);
    token.unset();
  } catch (e) {
    // console.log(`logout`);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      // console.log('токен відсутній в local storage');
      // return /* видасть помилку, бо в payload буде передано undefined */
      return thunkAPI.rejectWithValue('No valid token'); /* примусово відхиляю auth/refresh/pending */
      // return state; /* другий варіант, повернути state */
    }
    try {
      token.set(
        persistedToken
      ); /* додаю токен з local storage в заголовок axios.get запиту */
      const { data } = await axios.get('/users/current');
      // console.log(`fetchCurrentUser`);
      // console.log(data);
      return data;
    } catch (e) {
      // console.log(`fetchCurrentUser`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // console.log(`fetchContacts:`);
      // console.log(response.data);
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
      // console.log(`addContact`);
      // console.log(response.data);
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
      // console.log(`deleteContact`);
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
