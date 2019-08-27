
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from '../src/api/axios';

import { openAccount } from '../src/actions/openAccountAction';
import { OPEN_ACCOUNT_START, OPEN_ACCOUNT_SUCCESS, OPEN_ACCOUNT_FAILURE } from '../src/actions/types';

const mock = new MockAdapter(axios);
const mockStore = configureStore([thunk]);

const baseUrl = 'https://julius-banka.herokuapp.com/api/v1';

describe('Open account actions', () => {
  it('has an action to show open account request succeeded', (done) => {
    const store = mockStore({ });
    const accountData = {
      data: {
        type: 'savings',
        id: 1,
      },
    };
    mock.onPost(`${baseUrl}/accounts`).reply(
      201,
      {
        data: accountData,
      },
    );
    const expectedAction = [
      {
        type: OPEN_ACCOUNT_START,
      },
      {
        type: OPEN_ACCOUNT_SUCCESS,
        payload: accountData,
      },
    ];
    store.dispatch(openAccount({ type: 'admin@gmail.com' })).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });

  it('has an action to show open account request failure', (done) => {
    const store = mockStore({ });
    const message = 'Description is required';

    mock.onPost(`${baseUrl}/accounts`).reply(
      400,
      {
       error: message,
      },
    );
    const expectedAction = [
      {
        type: OPEN_ACCOUNT_START,
      },
      {
        type: OPEN_ACCOUNT_FAILURE,
        payload: {
          message,
        },
      },
    ];
    store.dispatch(openAccount({ firstName: 'julius' })).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });
});
