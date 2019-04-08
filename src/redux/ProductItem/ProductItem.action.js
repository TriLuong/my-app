import store from "../store";
import { productListSuccess } from "../ProductList/ProductList.action";
import { headerReload } from "../Header/Header.action";

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

export function setProductSelect(product) {
  // console.log("product.id, product.quantity", product.id, product.quantity);
  const products = store.getState().productListReducer.result;
  const countProduct = store.getState().productItemReducer.count;
  return dispatch => {
    dispatch(productItemRequest());
    const productSelected = { ...product };
    products.forEach((elemt, index) => {
      if (elemt.id === productSelected.id) {
        elemt.quantity = elemt.quantity + 1;
        elemt.state = "(Selected)";
        productSelected.quantity += 1;
      }
    });
    dispatch(productListSuccess([...products]));
    dispatch(headerReload());
    // dispatch(headerRequest());
    if (productSelected.quantity === 1) {
      dispatch(productItemCount(countProduct + 1));
    }
    // console.log("b");
    dispatch(productItemSuccess([...products]));
  };
}

export function deleteProducts(product) {
  const products = store.getState().productListReducer.result;
  const countProduct = store.getState().productItemReducer.count;
  return dispatch => {
    dispatch(productItemRequest());
    const productSelected = { ...product };
    products.forEach((elemt, index) => {
      if (elemt.id === productSelected.id) {
        elemt.quantity = 0;
        elemt.state = "";
        productSelected.quantity = 0;
        console.log("index delete", index);
      }
    });
    dispatch(productListSuccess([...products]));
    console.log("products", products);
    console.log("a");
    dispatch(headerReload());
    console.log("b");
    dispatch(productItemCount(countProduct - 1));
  };
}
