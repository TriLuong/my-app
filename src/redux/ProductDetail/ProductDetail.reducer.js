import {
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL
} from "./ProductDetail.action";

const initialState = {
  load: false,
  result: null,
  error: null
};

export default function productDetailReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return {
        load: true
      };
    case PRODUCT_DETAIL_SUCCESS:
      return {
        load: false,
        result: action.payload
      };
    case PRODUCT_DETAIL_FAIL:
      return {
        load: false,
        error: action.error
      };
    default:
      return { ...state };
  }
}
