
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from '../src/api/axios';

import { fetchUserAccounts } from '../src/actions/fetchUserAccountsAction';
import { FETCH_USER_ACCOUNTS_START, FETCH_USER_ACCOUNTS__SUCCESS, FETCH_USER_ACCOUNTS__FAILURE } from '../src/actions/types';

const mock = new MockAdapter(axios);
const mockStore = configureStore([thunk]);

const baseUrl = 'https://julius-banka.herokuapp.com/api/v1';
let email = 'julius@gmail.com';

describe('Fetch User Accounts account actions', () => {
  it('has an action to show fetch account request succeeded', (done) => {
    const store = mockStore({ });
    const accountData = [{
      data: {
        type: 'savings',
        id: 1,
      },
    }];
    mock.onGet(`${baseUrl}/user/${email}/accounts`).reply(
      200,
      {
        data: accountData,
      },
    );
    const expectedAction = [
      {
        type: FETCH_USER_ACCOUNTS_START,
      },
      {
        type: FETCH_USER_ACCOUNTS__SUCCESS,
        payload: accountData,
      },
    ];
    store.dispatch(fetchUserAccounts(email)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });

  it('has an action to show open account request failure', (done) => {
    const store = mockStore({ });
    const message = 'Description is required';

    mock.onGet(`${baseUrl}/user/${email}/accounts`).reply(
      400,
      {
       error: message,
      },
    );
    const expectedAction = [
      {
        type: FETCH_USER_ACCOUNTS_START,
      },
      {
        type: FETCH_USER_ACCOUNTS__FAILURE,
        payload: {
          message,
        },
      },
    ];
    store.dispatch(fetchUserAccounts(email)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });
});
