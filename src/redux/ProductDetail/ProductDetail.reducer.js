import { PRODUCT_DETAIL_REQUEST } from "./ProductDetail.action";

const initialState = {
  load: false,
  result: null
};

export default function productDetailReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return {
        load: true
      };
    case "SELECTED_PRODUCT":
      return {
        load: false,
        result: action.payload
      };
    default:
      return { ...state };
  }
}
