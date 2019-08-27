
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from '../src/api/axios';

import { registerUser } from '../src/actions/signupAction';
import { SIGNUP_USER_START, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE } from '../src/actions/types';

const mock = new MockAdapter(axios);
const mockStore = configureStore([thunk]);

const baseUrl = 'https://julius-banka.herokuapp.com/api/v1';

describe('Signup actions', () => {
  it('has an action to show register user request succeeded', (done) => {
    const store = mockStore({ });
    const userData = {
      data: {
        email: 'admin@gmail.com',
        id: 1,
      },
    };
    mock.onPost(`${baseUrl}/auth/signup`).reply(
      201,
      {
        data: userData,
      },
    );
    const expectedAction = [
      {
        type: SIGNUP_USER_START,
      },
      {
        type: SIGNUP_USER_SUCCESS,
        payload: userData,
      },
    ];
    store.dispatch(registerUser({ email: 'admin@gmail.com', password: 'admin123' })).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });

  it('has an action to show user register request failure', (done) => {
    const store = mockStore({ });
    const message = 'Description is required';

    mock.onPost(`${baseUrl}/auth/signup`).reply(
      400,
      {
       error: message,
      },
    );
    const expectedAction = [
      {
        type: SIGNUP_USER_START,
      },
      {
        type: SIGNUP_USER_FAILURE,
        payload: {
          message,
        },
      },
    ];
    store.dispatch(registerUser({ firstName: 'julius' })).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });
});
