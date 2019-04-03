import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { HomeContext } from "../Home";
import data from "../../dataProductList.json";
import firebase from "../../firebase";
import { Link } from "react-router-dom";
import { Z_STREAM_ERROR } from "zlib";

const Provider = HomeContext.Provider;
function LoginPage(props) {
  console.log("props of LoginPage", props);
  // const [state, setState] = useState({})
  // const value = React.useContext(HomeContext);
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);
  const [product, setProduct] = useState([]);
  const [countProduct, setCountProduct] = useState(0);
  const [dataSort, setDataSort] = useState(data);
  const [LoginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const ChangeHandler = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setLoginInfo({ ...LoginInfo, [name]: value });
  };

  const SubmitHandler = async event => {
    event.preventDefault();
    try {
      console.log("props.location.state.from", props.location.state.from);
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(LoginInfo.email, LoginInfo.password);
      console.log("result", result);
      props.history.push({ pathname: props.location.state.from });
    } catch (err) {
      setError("* " + err.message);
    }
  };
  return (
    <Provider
      value={{
        dataSort,
        setDataSort,
        total,
        setTotal,
        product,
        setProduct,
        countProduct,
        setCountProduct
      }}
    >
      <Header />
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Login From</h3>
                <form action="#" onSubmit={SubmitHandler}>
                  <label htmlFor="name">
                    Email Address <span>**</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter Username or Email address..."
                    name="email"
                    onChange={ChangeHandler}
                  />
                  <label htmlFor="pass">
                    Password <span>**</span>
                  </label>
                  <input
                    id="pass"
                    type="password"
                    placeholder="Enter password..."
                    name="password"
                    onChange={ChangeHandler}
                  />
                  <div className="login-action mb-20 fix">
                    <span className="log-rem f-left">
                      <input id="remember" type="checkbox" />
                      <label htmlFor="remember">Remember me!</label>
                    </span>
                    <span className="forgot-login f-right">
                      <a href="#">Lost your password?</a>
                    </span>
                  </div>
                  <p style={{ color: "red" }}>{error}</p>
                  <button className="btn theme-btn-2 w-100" type="submit">
                    Login Now
                  </button>
                  <div className="or-divide">
                    <span>or</span>
                  </div>
                  <Link to="/register">
                    <button className="btn theme-btn w-100">
                      Register Now
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Provider>
  );
}

export default withRouter(LoginPage);
