import reducer from '../src/reducers/signupReducer';
import {
  SIGNUP_USER_START,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
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
    expect(reducer(undefined, { type: SIGNUP_USER_START })).toEqual(
      {
        users: [],
        isLoading: true,
        errors: null,
      },
    );
  });
  it('should return the state on success', () => {
    expect(reducer(undefined, { type: SIGNUP_USER_SUCCESS, payload: { id: 1 } })).toEqual(
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
    expect(reducer(undefined, { type: SIGNUP_USER_FAILURE, payload: { message: 'Error occured' } })).toEqual(
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
