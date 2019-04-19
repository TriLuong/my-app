export const ORDER_REQUEST = "ORDER_REQUEST";
export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_FAIL = "ORDER_FAIL";

export function orderRequest() {
  return {
    type: ORDER_REQUEST
  };
}

//Action Creator
export function orderSuccess(orderInfo) {
  return {
    type: ORDER_SUCCESS,
    result: orderInfo
  };
}

//Action Creator
export function orderFail(error) {
  return {
    type: ORDER_FAIL,
    error: error
  };
}

export function setOrderInfo(info, props) {
  return (dispatch) => {
    dispatch(orderRequest());
    try {
      dispatch(orderSuccess(info));
      props.history.push({ pathname: "/confirmorder" });
    } catch (error) {
      dispatch(orderFail(error));
    }
  };
}
