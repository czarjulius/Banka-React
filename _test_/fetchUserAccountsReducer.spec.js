import reducer from '../src/reducers/fetchUserAccountsReducer';
import {
    FETCH_USER_ACCOUNTS_START,
    FETCH_USER_ACCOUNTS__SUCCESS,
    FETCH_USER_ACCOUNTS__FAILURE,
} from '../src/actions/types';

describe('Signup reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        accounts: [],
        isLoading: false,
        errors: null,
      },
    );
  });
  it('should return the initial state on start', () => {
    expect(reducer(undefined, { type: FETCH_USER_ACCOUNTS_START })).toEqual(
      {
        accounts: [],
        isLoading: true,
        errors: null,
      },
    );
  });
  it('should return the state on success', () => {
    expect(reducer(undefined, { type: FETCH_USER_ACCOUNTS__SUCCESS, payload: [{ id: 1 }] })).toEqual(
      {
        accounts: [
          {
            id: 1,
          },
        ],
        isLoading: false,
        errors: null,
      },
    );
  });
  it('should return the state on failure', () => {
    expect(reducer(undefined, { type: FETCH_USER_ACCOUNTS__FAILURE, payload: { message: 'Error occured' } })).toEqual(
      {
        accounts: [],
        isLoading: false,
        errors: {
          message: 'Error occured',
        },
      },
    );
  });
});
