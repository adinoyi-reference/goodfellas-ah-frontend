import authReducer from '../../reducers/authReducer';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';
import * as profileData from '../mock/profileData';

const mockData = {
  authenticated: undefined,
  userId: 1,
};
describe('fetchProfile reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle SIGNIN_USER', () => {
    expect(
      authReducer([], {
        type: types.SIGNIN_USER,
        payload: mockData,
      }),
    ).toEqual(mockData);
  });
  it('should handle SIGNOUT_USER', () => {
    expect(
      authReducer([], {
        type: types.SIGNOUT_USER,
      }),
    ).toEqual({
      authenticated: '',
      userId: null,
    });
  });
  it('should handle SET_OWN_PROFILE', () => {
    expect(
      authReducer([], {
        type: types.SET_OWN_PROFILE,
        payload: profileData.profile,
      }),
    ).toEqual({ ownProfile: profileData.profile });
  });
  it('should handle SET_USER', () => {
    expect(
      authReducer([], {
        type: types.SET_USER,
        payload: profileData.profile,
      }),
    ).toEqual({ user: profileData.profile });
  });
  it('should handle SIGNIN_USER_ERROR', () => {
    expect(
      authReducer([], {
        type: types.SIGNIN_USER_ERROR,
        payload: 'an error occoured',
      }),
    ).toEqual({ errorMessage: 'an error occoured' });
  });
});
