//Action type
export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL";

//Action Creator
export function productListRequest() {
  return {
    type: PRODUCT_LIST_REQUEST
  };
}

//Action Creator
export function productListSuccess() {
  return {
    type: PRODUCT_LIST_SUCCESS
  };
}

//Action Creator
export function productListFail() {
  return {
    type: PRODUCT_LIST_FAIL
  };
}
