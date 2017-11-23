import { userAuthentication } from './action';

const initialState = {
  isAuthenticationInProgress: false,
  isAuthenticated: false,
  authenticatedUser: null,
  accessToken: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userAuthentication.LOGIN_PROGRESS:
      return { ...state, isAuthenticationInProgress: true };
    case userAuthentication.LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, isAuthenticationInProgress: false };
    case userAuthentication.LOGIN_ERROR:
      return { ...state, isAuthenticated: false, isAuthenticationInProgress: false };
    case userAuthentication.LOGOUT:
      return initialState;
    default:
      return state;
  }
};