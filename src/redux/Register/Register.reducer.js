import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./Register.action";

const initialState = {
  result: false,
  load: false,
  error: null
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, load: true };
    case REGISTER_SUCCESS:
      return { ...state, load: false, result: action.result, error: "" };
    case REGISTER_FAIL:
      return { ...state, load: false, error: action.error };
    default:
      return { ...state };
  }
}
