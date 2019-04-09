export const PRODUCT_DETAIL_REQUEST = "PRODUCT_DETAIL_REQUEST";

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

export function getData() {
  return dispatch => {
    dispatch(productDetailRequest());
  };
}

export function getProduct(id) {
  return (dispatch, getState) => {
    // console.log("store ProductDetail", store);
    dispatch({
      type: "SELECTED_PRODUCT",
      payload: getState().productListReducer.result.find(elemt => {
        return elemt.id.toString() === id;
      })
    });
  };
}
