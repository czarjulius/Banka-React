import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import accountReducer from './openAccountReducer';

export default combineReducers({
    signupReducer,
    loginReducer,
    accountReducer,
});
