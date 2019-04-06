import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL
} from "./ProductList.action";

const initialState = {
  result: null,
  load: false,
  error: null
};

export default function productListReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, load: true };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, load: false, result: action.payload };
    case PRODUCT_LIST_FAIL:
      return { ...state, load: false, error: action.error };
    default:
      return { ...state };
  }
}
