//Action type
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

//Action Creator
export function registerRequest() {
  return {
    type: REGISTER_REQUEST
  };
}

//Action Creator
export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS
  };
}

//Action Creator
export function registerFail() {
  return {
    type: REGISTER_FAIL
  };
}
