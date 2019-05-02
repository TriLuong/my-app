import { ADMIN_REQUEST, ADMIN_SUCCESS } from "./Admin.action";

const initialState = {
  result: null,
  load: false
};

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_REQUEST:
      return { ...state, load: true };
    case ADMIN_SUCCESS:
      return { ...state, load: false, result: action.data };
    default:
      return state;
  }
}
