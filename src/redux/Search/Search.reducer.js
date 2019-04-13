import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL } from "./Search.action";

const initialState = {
  result: null,
  load: false,
  error: null
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REQUEST:
      return { ...state, load: true };
    case SEARCH_SUCCESS:
      return { ...state, load: false, result: action.payload };
    case SEARCH_FAIL:
      return { ...state, load: false, error: action.error };
    default:
      return { ...state };
  }
}
