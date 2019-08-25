import * as types from './types';
import axiosInstance from '../api/axios';


export const createUserStart = () => ({
  type: types.SIGNUP_USER_START,
});

export const createUserFailed = payload => ({
  type: types.SIGNUP_USER_FAILURE,
  payload,
});

export const createUserSuccess = payload => ({
  type: types.SIGNUP_USER_SUCCESS,
  payload,
});

export const registerUser = newUserDetails => (dispatch) => {
  dispatch(createUserStart());
  return axiosInstance.post('/auth/signup', newUserDetails).then(({ data, status }) => {
    dispatch(createUserSuccess(data.data));
    return status;
  }).catch((err) => {
    dispatch(createUserFailed({ message: err.response.data.error }));
  });
};
