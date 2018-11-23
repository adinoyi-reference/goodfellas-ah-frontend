const initialState = {
  authenticated: '',
  errorMessage: '',
  successMessage: '',
  user: {},
  ownProfile: {},
  articles: [],
  articleLoading: false,
  error: [],
  singleArticle: null,
  articleError: '',
  searchResults: [],
  searchError: [],
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
