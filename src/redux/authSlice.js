import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from '../redux/operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      console.log(action);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      console.log(action);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      console.log(action);
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      console.log(action);
      state.user = action.payload.user;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
