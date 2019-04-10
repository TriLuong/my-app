export const PRODUCT_ITEM_REQUEST = "PRODUCT_ITEM_REQUEST";
export const PRODUCT_ITEM_SUCCESS = "PRODUCT_ITEM_SUCCESS";
export const PRODUCT_ITEM_COUNT = "PRODUCT_ITEM_COUNT";

export function productItemRequest() {
  return {
    type: PRODUCT_ITEM_REQUEST
  };
}

export function productItemSuccess(data) {
  return {
    type: PRODUCT_ITEM_SUCCESS,
    payload: data
  };
}

export function productItemCount(count) {
  return {
    type: PRODUCT_ITEM_COUNT,
    count: count
  };
}

export function selectProducts(product) {
  // console.log("product.id, product.quantity", product.id, product.quantity);

  return (dispatch, getState) => {
    dispatch(productItemRequest());
    const productsSelectedArr = getState().productItemReducer.result;
    //Select fist product
    if (productsSelectedArr === null) {
      dispatch(
        productItemSuccess([{ ...product, quantity: 1, state: "(Selected)" }])
      );
    } else {
      const producSelected = productsSelectedArr.find((elemt, index) => {
        if (elemt.id === product.id) {
          productsSelectedArr[index].quantity += 1;
          dispatch(productItemSuccess([...productsSelectedArr]));
          return elemt;
        }
      });
      // console.log("producSelected", producSelected != null);
      if (producSelected == null) {
        dispatch(
          productItemSuccess([
            ...productsSelectedArr,
            { ...product, quantity: 1 }
          ])
        );
      }
    }
    dispatch(productItemCount(getState().productItemReducer.result.length));
  };
}

export function deleteProducts(product) {
  return (dispatch, getState) => {
    dispatch(productItemRequest());
    const productsSelectedArr = getState().productItemReducer.result;
    productsSelectedArr.forEach((elemt, index) => {
      if (elemt.id === product.id) {
        productsSelectedArr.splice(index, 1);
      }
    });
    dispatch(productItemSuccess([...productsSelectedArr]));
    dispatch(productItemCount(getState().productItemReducer.result.length));
  };
}
