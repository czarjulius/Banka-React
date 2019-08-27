
import * as types from '../actions/types';


const initialState = {
  isLoading: false,
  accounts: [],
  errors: null,
};

const fetchAccountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_ACCOUNTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_USER_ACCOUNTS__SUCCESS:
      return {
        ...state,
        isLoading: false,
        accounts: action.payload,
      };
    case types.FETCH_USER_ACCOUNTS__FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default fetchAccountsReducer;
