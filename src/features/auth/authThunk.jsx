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
