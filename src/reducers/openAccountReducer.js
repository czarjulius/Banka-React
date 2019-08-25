
import * as types from '../actions/types';


const initialState = {
  isLoading: false,
  accounts: [],
  errors: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_ACCOUNT_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.OPEN_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        accounts: state.accounts.concat(action.payload),
      };
    case types.OPEN_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
