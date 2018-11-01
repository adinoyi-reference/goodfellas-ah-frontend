import * as types from '../actions/actionTypes';

const initialState = {
  authenticated: '',
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return { ...state, authenticated: action.payload };
    case types.AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
