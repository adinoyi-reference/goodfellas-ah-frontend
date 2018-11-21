import axios from 'axios';
import * as types from './actionTypes';

const apiUrl = process.env.REACT_APP_API_URL;

export const getArticles = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/api/articles/feed/1&24`);
    dispatch({
      type: types.GET_ARTICLES,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_ARTICLES_ERROR,
      payload: error.response,
    });
  }
};

export const search = (searchValues, callback) => async (dispatch) => {
  try {
    const { Title, Author, Tag } = searchValues;

    const response = await axios.get(`${apiUrl}/api/articles/search?article=${Title}&author=${Author}&tag=${Tag}`);
    dispatch({
      type: types.SEARCH,
      payload: response.data,
    });
    callback();
  } catch (error) {
    dispatch({
      type: types.SEARCH_ERROR,
      payload: error.response,
    });
  }
};

export const addTags = (newTags, slug, callback) => async (dispatch, getState, { api }) => {
  try {
    const response = await api.post(`${apiUrl}/api/articles/${slug}/tags`, {
      tags: newTags,
    });
    dispatch({
      type: types.ADD_TAGS,
      payload: response.data,
    });
    callback();
  } catch (error) {
    dispatch({
      type: types.ADD_TAGS_ERROR,
      payload: error.response,
    });
  }
};
