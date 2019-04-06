import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import loginReducer from "./Login/Login.reducer";
import registerReducer from "./Register/Register.reducer";
import productDetailReducer from "./ProductDetail/ProductDetail.reducer";
import productListReducer from "./ProductList/ProductList.reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  loginReducer,
  registerReducer,
  productDetailReducer,
  productListReducer
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
export default store;