import * as types from './types';
import axiosInstance from '../api/axios';


export const loginUserStart = () => ({
  type: types.LOGIN_USER_START,
});

export const loginUserFailed = payload => ({
  type: types.LOGIN_USER_FAILURE,
  payload,
});

export const loginUserSuccess = payload => ({
  type: types.LOGIN_USER_SUCCESS,
  payload,
});

export const loginUser = newUserDetails => (dispatch) => {
  dispatch(loginUserStart());
  return axiosInstance().post('/auth/signin', newUserDetails).then(({ data, status }) => {
    dispatch(loginUserSuccess(data.data));
    return status;
  }).catch((err) => {
    dispatch(loginUserFailed({ message: err.response.data.error }));
  });
};
