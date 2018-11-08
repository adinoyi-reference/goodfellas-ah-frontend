import axios from 'axios';
import queryString from 'query-string';
import swal from 'sweetalert2';
import * as types from './actionTypes';

export const signup = (formValues, callback) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/signup', formValues);
    dispatch({
      type: types.SIGNIN_USER,
      payload: res.data.token,
    });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const signin = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/signin', formValues);
    dispatch({ type: types.SIGNIN_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return { type: types.SIGNOUT_USER };
};

export const forgotPassword = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('api/forgotPassword', userData);
    dispatch({ type: types.SUCCESS_MSG, payload: response.data.message });
    swal(response.data.message, 'Click the link in the email to reset your password', 'success');
  } catch (error) {
    dispatch({ type: types.RESET_ERROR, payload: error.response.data.message });
  }
};
export const resetPassword = (userData, history) => async (dispatch) => {
  try {
    const { token } = queryString.parse(history.location.search);
    const response = await axios.post(`api/resetPassword?token=${token.trim()}`, userData);
    dispatch({ type: types.SUCCESS_MSG, payload: response.data.message });
    swal({
      title: response.data.message,
      type: 'success',
      html: '<a href="/auth/signin">SignIn </a>',
      showConfirmButton: false,
    });
  } catch (error) {
    dispatch({ type: types.RESET_ERROR, payload: error.response.data.message });
  }
};
