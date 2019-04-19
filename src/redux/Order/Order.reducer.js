import { ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAIL } from "./Order.action";

const initialState = {
  load: false,
  result: null,
  error: null
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case ORDER_REQUEST:
      return { ...state, load: true };
    case ORDER_SUCCESS:
      return { ...state, load: false, result: action.result, error: "" };
    case ORDER_FAIL:
      return { ...state, load: false, error: action.error };
    default:
      return { ...state };
  }
}
