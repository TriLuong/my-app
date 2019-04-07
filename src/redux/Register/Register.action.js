import firebase from "../../firebase";

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
    type: REGISTER_SUCCESS,
    result: true
  };
}

//Action Creator
export function registerFail(error) {
  return {
    type: REGISTER_FAIL,
    error: error
  };
}

export function checkRegister(RegisterInfo) {
  return async dispatch => {
    dispatch(registerRequest());
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(
          RegisterInfo.email,
          RegisterInfo.password
        );
      dispatch(registerSuccess());
      // console.log(result);
      // props.history.push({ pathname: "/login" });
    } catch (err) {
      console.log(err);
      dispatch(registerFail("* " + err.message));
    }
  };
}
