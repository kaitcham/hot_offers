import { toast } from 'react-toastify';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createMemberThunk,
  loginMemberThunk,
  signoutMemberThunk,
} from './authThunk';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage';

const initialState = {
  status: '',
  error: null,
  user: getUserFromLocalStorage(),
};

export const createMember = createAsyncThunk(
  'auth/createMember',
  createMemberThunk
);

export const loginMember = createAsyncThunk(
  'auth/loginMember',
  loginMemberThunk
);

export const signoutMember = createAsyncThunk(
  'auth/signoutMember',
  signoutMemberThunk
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createMember.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(createMember.fulfilled, (state, action) => {
      state.status = 'success';
      toast.success('Account created successfully');
    });
    builder.addCase(createMember.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      toast.error('User Registration failed');
    });
    builder.addCase(loginMember.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(loginMember.fulfilled, (state, action) => {
      state.status = 'success';
      state.user = action.payload;
      addUserToLocalStorage(action.payload);
      toast.success('Login successful');
    });
    builder.addCase(loginMember.rejected, (state, action) => {
      state.status = 'failed';
      const { non_field_errors } = action.payload;
      non_field_errors
        ? toast.error(non_field_errors[0])
        : toast.error(action.payload.message);
    });
    builder.addCase(signoutMember.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(signoutMember.fulfilled, (state) => {
      state.status = '';
      state.user = null;
      removeUserFromLocalStorage();
      toast.success('Logout successful');
    });
    builder.addCase(signoutMember.rejected, (state, action) => {
      state.status = 'failed';
      toast.error(action.payload?.detail);
    });
  },
});

export default authSlice.reducer;
