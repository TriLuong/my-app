import firebase from "../../firebase";

//Action type
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

//Action Creator
export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

//Action Creator
export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    result: data
  };
}

//Action Creator
export function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    error: error
  };
}

export function checkLogin(loginInfo) {
  return async dispatch => {
    dispatch(loginRequest());

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(loginInfo.email, loginInfo.password);
      console.log("LoginInfo", loginInfo);
      return dispatch(loginSuccess(loginInfo));
    } catch (error) {
      return dispatch(loginFail("* " + error.message));
    }
  };
}
