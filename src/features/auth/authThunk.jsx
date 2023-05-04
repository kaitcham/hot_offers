import { setIsMember } from '../appSlice';
import customBaseUrl from '../../utils/axios';

export const createMemberThunk = async (loginData, thunkApi) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = loginData;
    await customBaseUrl.post('/signup', {
      first_name: firstName,
      last_name: lastName,
      email,
      password1: password,
      password2: confirmPassword,
    });
    thunkApi.dispatch(setIsMember(true));
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
};

export const loginMemberThunk = async (loginData, thunkApi) => {
  try {
    const { email, password } = loginData;
    const response = await customBaseUrl.post('/signin', {
      username: email,
      password,
    });
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
};

export const signoutMemberThunk = async (_, thunkApi) => {
  try {
    const response = await customBaseUrl.post('/signout');
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
};
