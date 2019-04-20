export const PRODUCT_DETAIL_REQUEST = "PRODUCT_DETAIL_REQUEST";
export const PRODUCT_DETAIL_SUCCESS = "PRODUCT_DETAIL_SUCCESS";
export const PRODUCT_DETAIL_FAIL = "PRODUCT_DETAIL_FAIL";

export function productDetailRequest() {
  return {
    type: PRODUCT_DETAIL_REQUEST
  };
}

// export function productDetailGetData(data) {
//   return {
//     type: PRODUCT_DETAIL_REQUEST,
//     playload: data
//   };
// }

export function productDetailSuccess(data) {
  return {
    type: PRODUCT_DETAIL_SUCCESS,
    payload: data
  };
}

export function productDetailFail(error) {
  return {
    type: PRODUCT_DETAIL_FAIL,
    error: error
  };
}

export function getProductDetail(id) {
  return (dispatch) => {
    dispatch(productDetailRequest());
    return fetch(`https://mapi.sendo.vn/mob/product/${id}/detail`)
      .then((r) => r.json())
      .then((r) => dispatch(productDetailSuccess(r)))
      .catch((error) => dispatch(productDetailFail(error)));
  };
}
