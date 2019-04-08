import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import loginReducer from "./Login/Login.reducer";
import registerReducer from "./Register/Register.reducer";
import productListReducer from "./ProductList/ProductList.reducer";
import productItemReducer from "./ProductItem/ProductItem.reducer";
import headerReducer from "./Header/Header.reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  loginReducer,
  registerReducer,
  productListReducer,
  headerReducer,
  productItemReducer
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
export default store;
