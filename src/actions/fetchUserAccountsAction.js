import * as types from './types';
import axiosInstance from '../api/axios';
import setAuthToken from '../utils/setAuthToken';


export const fetchUserAccountsStart = () => ({
  type: types.FETCH_USER_ACCOUNTS_START,
});

export const fetchUserAccountsFailed = payload => ({
  type: types.FETCH_USER_ACCOUNTS__FAILURE,
  payload,
});

export const fetchUserAccountsSuccess = payload => ({
  type: types.FETCH_USER_ACCOUNTS__SUCCESS,
  payload,
});

export const fetchUserAccounts = (email, newAccountsDetail) => (dispatch) => {
  dispatch(fetchUserAccountsStart());
  return axiosInstance
    .get(`/user/${email}/accounts`, newAccountsDetail)
    .then(({ data, status }) => {
    dispatch(fetchUserAccountsSuccess(data.data));
  }).catch((err) => {
    dispatch(fetchUserAccountsFailed({ message: err.response.data.error }));
  });
};
