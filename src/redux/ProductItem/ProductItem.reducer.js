import {
  PRODUCT_ITEM_REQUEST,
  PRODUCT_ITEM_SUCCESS,
  PRODUCT_ITEM_COUNT
} from "./ProductItem.action";

const initialState = {
  load: false,
  result: null,
  count: 0
};

export default function productItemReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_ITEM_REQUEST:
      return { ...state, load: true };
    case PRODUCT_ITEM_SUCCESS:
      return { ...state, load: false, result: action.payload };
    case PRODUCT_ITEM_COUNT:
      return { ...state, load: false, count: action.count };
    default:
      return { ...state };
  }
}
