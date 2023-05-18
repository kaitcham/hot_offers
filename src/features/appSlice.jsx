import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  aside: true,
  isMember: true,
  previousPath: null,
  accountMessage: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleAside: (state) => {
      state.aside = !state.aside;
    },
    setIsMember: (state, action) => {
      state.isMember = action.payload || !state.isMember;
    },
    setPreviousPath: (state, action) => {
      state.previousPath = action.payload;
    },
    setAccountMessage: (state) => {
      state.accountMessage = !state.accountMessage;
    },
  },
});

export const { toggleAside, setIsMember, setPreviousPath, setAccountMessage } =
  appSlice.actions;

export default appSlice.reducer;
