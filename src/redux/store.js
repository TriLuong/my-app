import { createStore, combineReducers } from "redux";
import loginReducer from "./Login/Login.reducer";
import registerReducer from "./Register/Register.reducer";
import productDetailReducer from "./ProductDetail/ProductDetail.reducer";
import ProductListReducer from "./ProductList/ProductList.reducer";
const reducer = combineReducers({
  loginReducer,
  registerReducer,
  productDetailReducer,
  ProductListReducer
});

const store = createStore(reducer);
export default store;
