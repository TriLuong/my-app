import { HEADER_RELOAD } from "./Header.action";

const initialState = {
  load: false
};

export default function headerReducer(state = initialState, action) {
  switch (action.type) {
    case HEADER_RELOAD:
      return { ...state, load: !state.load };
    default:
      return { ...state };
  }
}
