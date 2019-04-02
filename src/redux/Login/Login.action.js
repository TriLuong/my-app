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
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

//Action Creator
export function loginFail() {
  return {
    type: LOGIN_FAIL
  };
}
