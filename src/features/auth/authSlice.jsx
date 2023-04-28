import { toast } from 'react-toastify';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createMemberThunk } from './authThunk';

const initialState = {
  user: {},
  status: '',
  error: null,
};

export const createMember = createAsyncThunk(
  'auth/createMember',
  createMemberThunk
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
      state.user = action.payload;
      toast.success('Account created successfully');
    });
    builder.addCase(createMember.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      toast.error('User Registration failed');
    });
  },
});

export default authSlice.reducer;
