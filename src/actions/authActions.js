import queryString from 'query-string';
import swal from 'sweetalert2';
import axios from 'axios';
import * as types from './actionTypes';

const apiUrl = process.env.REACT_APP_API_URL;
const persistAuth = async (dispatch, API, token, userId) => {
  API.updateToken(token);
  const userProfile = await API.api.get(`/user/profile/${userId}`);
  const { user, ...profile } = userProfile.data.data;
  dispatch({ type: types.SIGNIN_USER, payload: token });
  dispatch({ type: types.SET_OWN_PROFILE, payload: profile });
  dispatch({ type: types.SET_USER, payload: user });
  localStorage.setItem('token', token);
  localStorage.setItem('ownProfile', JSON.stringify(profile));
  localStorage.setItem('user', JSON.stringify(user));
};

export const signup = (formValues, callback) => async (dispatch, getState, API) => {
  try {
    const res = await API.openRoutes.post('/auth/signup', formValues);
    const { userId, token } = res.data;
    await persistAuth(dispatch, API, token, userId);
    callback();
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

// eslint-disable-next-line max-len
export const signin = (formValues, callback) => async (dispatch, getState, API) => {
  try {
    const response = await API.openRoutes.post('/auth/signin', formValues);
    const { userId, token } = response.data;
    await persistAuth(dispatch, API, token, userId);

    callback();
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const clearSigninError = () => ({ type: types.CLEAR_SIGNIN_ERROR });

export const signout = () => (dispatch, getState, API) => {
  localStorage.clear();
  API.updateToken(null);
  return dispatch({ type: types.SIGNOUT_USER });
};

export const socialSignin = ({ token, userId }, callback) => async (dispatch, getState, API) => {
  try {
    await axios.get(`${apiUrl}/api/user/profile/${userId}`, {
      headers: { Authorization: token },
    });
    await persistAuth(dispatch, API, token, userId);
    callback(true);
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
    callback(false);
  }
};

export const forgotPassword = (userData) => async (dispatch, getState, { openRoutes }) => {
  try {
    const response = await openRoutes.post('/forgotPassword', userData);
    dispatch({ type: types.SUCCESS_MSG, payload: response.data.message });
    dispatch({ type: types.RESET_ERROR, payload: '' });
    swal(response.data.message, 'Click the link in the email to reset your password', 'success');
  } catch (error) {
    dispatch({ type: types.RESET_ERROR, payload: error.response.data.message });
  }
};
export const resetPassword = (userData, history) => async (dispatch, getState, { openRoutes }) => {
  try {
    const { token } = queryString.parse(history.location.search);
    const response = await openRoutes.post(`/resetPassword?token=${token.trim()}`, userData);
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
