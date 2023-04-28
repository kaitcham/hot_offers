import { configureStore } from '@reduxjs/toolkit';
import appReducer from './features/appSlice';
import authReducer from './features/auth/authSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
  },
});
export default store;
