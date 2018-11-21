import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_USER:
      return {
        ...state,
        authenticated: action.payload,
        errorMessage: '',
      };
    case types.SIGNIN_USER_ERROR:
      return { ...state, errorMessage: action.payload };
    case types.CLEAR_SIGNIN_ERROR:
      return { ...state, errorMessage: '' };
    case types.SUCCESS_MSG:
      return { ...state, successMessage: action.payload };
    case types.RESET_ERROR:
      return { ...state, errorMessage: action.payload };
    case types.SIGNOUT_USER:
      return {
        ...state,
        authenticated: '',
        ownProfile: {},
        user: {},
      };
    case types.SET_OWN_PROFILE:
      return {
        ...state,
        ownProfile: action.payload,
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
