export const userAuthentication = {
  LOGIN_PROGRESS: 'USER_LOGIN_PROGRESS',
  LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  LOGIN_ERROR: 'USER_LOGIN_ERROR',
  LOGOUT: 'USER_LOGOUT'
};

export const userLogin = credential => dispatch => {
  dispatch({
    type: userAuthentication.LOGIN_PROGRESS
  });
  return fetch('http://localhost:5000/authenticate', {
    method: 'POST',
    body: JSON.stringify(credential),
    headers: {
      'Content-Type': 'Application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: userAuthentication.LOGIN_SUCCESS,
        staff: data
      });
    })
    .catch(error => {
      dispatch({
        type: userAuthentication.LOGIN_ERROR
      });
    });
};

export const userLogout = () => ({
  type: userAuthentication.LOGOUT
});