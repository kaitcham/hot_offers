import { toast } from 'react-toastify';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createMemberThunk, loginMemberThunk } from './authThunk';

const initialState = {
  user: {},
  status: '',
  error: null,
};

export const createMember = createAsyncThunk(
  'auth/createMember',
  createMemberThunk
);

export const loginMember = createAsyncThunk(
  'auth/loginMember',
  loginMemberThunk
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
      toast.success('Login successful');
    });
    builder.addCase(loginMember.rejected, (state, action) => {
      state.status = 'failed';
      const { non_field_errors } = action.payload;
      non_field_errors
        ? toast.error(non_field_errors[0])
        : toast.error(action.payload.message);
    });
  },
});

export default authSlice.reducer;
