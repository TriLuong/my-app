import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "./Login.action";

const initialState = {
  result: false,
  load: false,
  error: null
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, load: true };
    case LOGIN_SUCCESS:
      return { ...state, load: false, result: action.result, error: "" };
    case LOGIN_FAIL:
      return { ...state, load: false, error: action.error };
    default:
      return state;
  }
}
