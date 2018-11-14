import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';
import * as profileData from '../mock/profileData';
import * as profileActions from '../../actions/profileActions';
import API from '../mock/API';

const middlewares = [thunk.withExtraArgument(API)];
const mockStore = configureMockStore(middlewares);

describe('fetchProfile actions', () => {
  const actionSuccess = [
    { type: types.SET_PROFILE, payload: profileData.setProfile },
    { type: types.PROFILE_LOADING, payload: false },
  ];
  const actionFailure = [
    { type: types.SET_PROFILE_ERROR, payload: 'Invalid request, Route does not exist' },
    { type: types.PROFILE_LOADING, payload: false },
  ];
  it('creates SET_PROFILE and PROFILE_LOADING after successfuly fetching profile', () => {
    const store = mockStore({ profile: initialState.profile });

    return store.dispatch(profileActions.fetchProfile(1)).then(() => {
      expect(store.getActions()).toEqual(actionSuccess);
    });
  });
  it('creates SET_PROFILE_ERROR and PROFILE_LOADING after successfuly fetch error', () => {
    const store = mockStore({ profile: initialState.profile });

    return store.dispatch(profileActions.fetchProfile(5)).then(() => {
      expect(store.getActions()).toEqual(actionFailure);
    });
  });
});

describe('editProfile actions', () => {
  const { profile } = profileData.updateProfile.data;
  const { user, ...profilePayload } = profile;
  const expectedActions = [{
    type: types.UPDATE_PROFILE,
    payload: profile,
  },
  {
    type: types.SET_OWN_PROFILE,
    payload: profilePayload,
  }];
  it('creates SET_PROFILE after successfuly fetching profile', () => {
    const store = mockStore({ profile: initialState.profile });

    return store.dispatch(profileActions.editProfile(1)).then((response) => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(response).toEqual({ success: profileData.updateProfile.data.message });
    });
  });
  it('creates SET_PROFILE_ERROR and PROFILE_LOADING after successfuly fetch error', () => {
    const store = mockStore({ profile: initialState.profile });

    return store.dispatch(profileActions.editProfile(5)).then((response) => {
      expect(response).toEqual({ error: 'Invalid request, Route does not exist' });
    });
  });
});
