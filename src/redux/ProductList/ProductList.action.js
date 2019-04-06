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
export function productListSuccess(data) {
  return {
    type: PRODUCT_LIST_SUCCESS,
    payload: data
  };
}

//Action Creator
export function productListFail(error) {
  return {
    type: PRODUCT_LIST_FAIL,
    error: error
  };
}

export function getProducts() {
  return dispatch => {
    dispatch(productListRequest());
    return fetch(
      "https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=1"
    )
      .then(r => r.json())
      .then(r => dispatch(productListSuccess(r.data)))
      .catch(error => dispatch(productListFail(error)));
  };
}
