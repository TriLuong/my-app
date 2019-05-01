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

export  function  checkLogin(loginInfo, props) {
  return  async (dispatch, getState) => {
    dispatch(loginRequest());
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(loginInfo.email, loginInfo.password);
      // console.log("LoginInfo", loginInfo);
      dispatch(loginSuccess(loginInfo));
      try{
        getState().productListReducer.result.find((elemt)=>elemt.id===props.location.state.from)
          props.history.push({ pathname: props.location.state.from });
      } catch{
        props.history.push({pathname: "/"})
      }
      
    } catch (error) {
      // console.log("error.message",error.message)
      dispatch(loginFail("* " + error.message));
    }
  };
}
