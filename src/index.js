import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import data from "./dataProductList.json";
import PrivateRoute, { AdminRoute } from "./privateRouter";
import withLazy from "./hoc/withLazy";
import store from "./redux/store";
import { Provider } from "react-redux";
import Loading, {
  LoadingDetail,
  LoadingLogin,
  LoadingRegister
} from "./components/Loading";
import CheckoutContainer from "./pages/Checkout/Checkout.container";
import OrderContainer from "./pages/Order/Order.container";
import ConfirmOrderContainer from "./pages/ConfirmOrder/ConfirmOrder.container";
import OrderSuccess from "./pages/OderSuccess";
// import Admin from "./pages/Admin";

import "./index.css";
// import Home from "./pages/Home";
// import ProductDetail from "./pages/ProductDetail";
// import LoginPage from "./pages/Login";
// import RegisterPage from "./pages/Register";
// import NotFound from "./pages/NotFound";
import * as serviceWorker from "./serviceWorker";

const Home = withLazy(() => import("./pages/Home"), <Loading />);
// const ProductDetail = withLazy(() => import("./pages/ProductDetail"), <LoadingDetail/>);
const ProductDetailContainer = withLazy(
  () => import("./pages/ProductDetail/ProductDetail.container"),
  <LoadingDetail />
);

// const LoginPage = withLazy(() => import("./pages/Login"));
const LoginContainer = withLazy(
  () => import("./pages/Login/Login.container"),
  <LoadingLogin />
);
// const RegisterPage = withLazy(() => import("./pages/Register"));
const RegisterContainer = withLazy(
  () => import("./pages/Register/Register.container"),
  <LoadingRegister />
);

const Admin = withLazy(() => import("./pages/Admin"), null);
const AdminContainner = withLazy(
  () => import("./pages/Admin/Admin.container"),
  null
);

const NotFound = withLazy(() => import("./pages/NotFound"), null);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={ProductDetailContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
        <Route path="/checkout" component={CheckoutContainer} />
        <PrivateRoute path="/order" component={OrderContainer} />
        <PrivateRoute path="/confirmorder" component={ConfirmOrderContainer} />
        <PrivateRoute path="/ordersuccess" component={OrderSuccess} />
        <AdminRoute path="/admin" component={AdminContainner} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
