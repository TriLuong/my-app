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
  return (dispatch) => {
    dispatch(productListRequest());
    return fetch(
      "https://mapi.sendo.vn/mob/product/cat/phu-kien-cong-nghe/phu-kien-may-tinh-laptop/usb/?p=1"
      // "https://mapi.sendo.vn/mob/product/search/?p=1&q=balo"
    )
      .then((r) => r.json())
      .then((r) => dispatch(productListSuccess(r.data)))
      .catch((error) => dispatch(productListFail(error)));
  };
}

export function searchProducts(input) {
  return (dispatch) => {
    dispatch(productListRequest());
    // console.log("input", input);
    // const linkProduct =
    //   "https://mapi.sendo.vn/mob/product/search?p=1&q=" + input;
    // console.log(linkProduct);
    return fetch(`https://mapi.sendo.vn/mob/product/search?p=1&q=${input}`)
      .then((r) => r.json())
      .then((r) => dispatch(productListSuccess(r.data)))
      .catch((error) => dispatch(productListFail(error)));
  };
}

export function sortProducts(data) {
  return (dispatch) => {
    dispatch(productListRequest());
    dispatch(productListSuccess(data));
  };
}
