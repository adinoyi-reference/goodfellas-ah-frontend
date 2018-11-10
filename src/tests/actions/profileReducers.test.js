import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import profileReducer from '../../reducers/profileReducer';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';
import * as profileData from '../mock/profileData';
import * as profileActions from '../../actions/profileActions';
import API from '../mock/API';

const middlewares = [thunk.withExtraArgument(API)];
const mockStore = configureMockStore(middlewares);

describe('fetchProfile actions', () => {
  const expectedActions = [
    { type: types.SET_PROFILE, payload: profileData.setProfile },
    { type: types.PROFILE_LOADING, payload: false },
  ];
  it('creates SET_PROFILE after successfuly fetching articles', () => {
    const store = mockStore({ profile: initialState.profile });

    return store.dispatch(profileActions.fetchProfile(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('editProfile actions', () => {
  const expectedActions = [{
    type: types.UPDATE_PROFILE,
    payload: profileData.updateProfile.data.profile,
  }];
  it('creates SET_PROFILE after successfuly fetching articles', () => {
    const store = mockStore({ profile: initialState.profile });

    return store.dispatch(profileActions.editProfile(1)).then((response) => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(response).toEqual({ success: profileData.updateProfile.data.message });
    });
  });
});
