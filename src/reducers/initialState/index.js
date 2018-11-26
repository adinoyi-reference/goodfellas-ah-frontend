const initialState = {
  authenticated: '',
  errorMessage: '',
  successMessage: '',
  user: {},
  ownProfile: {},
  articles: [],
  articleLoading: false,
  error: [],
  searchResults: [],
  searchError: [],
  tags: [],
  tagsError: [],
  profile: {
    loading: true,
    profileView: 'Following',
    profileError: '',
    user: {},
    profile: {},
    followers: [],
    following: [],
    articles: [],
    favorites: [],
  },
  notification: [],
  notifications: {},
};

export default initialState;
