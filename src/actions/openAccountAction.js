import * as types from './types';
import axiosInstance from '../api/axios';


export const openAccountStart = () => ({
  type: types.OPEN_ACCOUNT_START,
});

export const openAccountFailed = payload => ({
  type: types.OPEN_ACCOUNT_FAILURE,
  payload,
});

export const openAccountSuccess = payload => ({
  type: types.OPEN_ACCOUNT_SUCCESS,
  payload,
});

export const openAccount = newAccountDetails => (dispatch) => {
  dispatch(openAccountStart());
  return axiosInstance.post('/accounts', newAccountDetails).then(({ data, status }) => {
    dispatch(openAccountSuccess(data.data));
    return status;
  }).catch((err) => {
    dispatch(openAccountFailed({ message: err.response.data.error}));
  });
};
