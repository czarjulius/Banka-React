import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';
import setAuthToken from '../utils/setAuthToken';

const initialState = {};

const middleware = [thunk];


const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);


const token = localStorage.getItem('token')

if(token) {
  setAuthToken(token)
}


export default store;
