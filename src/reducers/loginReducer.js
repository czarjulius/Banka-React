
import * as types from '../actions/types';


const initialState = {
  isLoading: false,
  users: [],
  errors: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: state.users.concat(action.payload),
      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
