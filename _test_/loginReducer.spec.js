import reducer from '../src/reducers/loginReducer';
import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../src/actions/types';

describe('Signup reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        users: [],
        isLoading: false,
        errors: null,
      },
    );
  });
  it('should return the initial state on start', () => {
    expect(reducer(undefined, { type: LOGIN_USER_START })).toEqual(
      {
        users: [],
        isLoading: true,
        errors: null,
      },
    );
  });
  it('should return the state on success', () => {
    expect(reducer(undefined, { type: LOGIN_USER_SUCCESS, payload: { id: 1 } })).toEqual(
      {
        users: [
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
    expect(reducer(undefined, { type: LOGIN_USER_FAILURE, payload: { message: 'Error occured' } })).toEqual(
      {
        users: [],
        isLoading: false,
        errors: {
          message: 'Error occured',
        },
      },
    );
  });
});
