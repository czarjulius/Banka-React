
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from '../src/api/axios';

import { loginUser } from '../src/actions/loginAction';
import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../src/actions/types';

const mock = new MockAdapter(axios);
const mockStore = configureStore([thunk]);

const baseUrl = 'https://julius-banka.herokuapp.com/api/v1';

describe('Login actions', () => {
  it('has an action to show login user request succeeded', (done) => {
    const store = mockStore({ });
    const userData = {
      data: {
        email: 'admin@gmail.com',
        id: 1,
      },
    };
    mock.onPost(`${baseUrl}/auth/signin`).reply(
      200,
      {
        data: userData,
      },
    );
    const expectedAction = [
      {
        type: LOGIN_USER_START,
      },
      {
        type: LOGIN_USER_SUCCESS,
        payload: userData,
      },
    ];
    store.dispatch(loginUser({ email: 'admin@gmail.com', password: 'admin123' })).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });

  it('has an action to show user login request failure', (done) => {
    const store = mockStore({ });
    const message = 'Description is required';

    mock.onPost(`${baseUrl}/auth/signin`).reply(
      400,
      {
       error: message,
      },
    );
    const expectedAction = [
      {
        type: LOGIN_USER_START,
      },
      {
        type: LOGIN_USER_FAILURE,
        payload: {
          message,
        },
      },
    ];
    store.dispatch(loginUser({ firstName: 'julius' })).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });
});
