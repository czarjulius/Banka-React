import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import accountReducer from './openAccountReducer';
import fetchAccountsReducer from './fetchUserAccountsReducer';

export default combineReducers({
    signupReducer,
    loginReducer,
    accountReducer,
    fetchAccountsReducer,
    toastr: toastrReducer,
});
