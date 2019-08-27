import reducer from '../src/reducers/openAccountReducer';
import {
    OPEN_ACCOUNT_START,
    OPEN_ACCOUNT_SUCCESS,
    OPEN_ACCOUNT_FAILURE,
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
    expect(reducer(undefined, { type: OPEN_ACCOUNT_START })).toEqual(
      {
        accounts: [],
        isLoading: true,
        errors: null,
      },
    );
  });
  it('should return the state on success', () => {
    expect(reducer(undefined, { type: OPEN_ACCOUNT_SUCCESS, payload: { id: 1 } })).toEqual(
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
    expect(reducer(undefined, { type: OPEN_ACCOUNT_FAILURE, payload: { message: 'Error occured' } })).toEqual(
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
