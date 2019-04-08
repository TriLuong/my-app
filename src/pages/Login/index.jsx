import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { Z_STREAM_ERROR } from "zlib";

function LoginPage(props) {
  // console.log("props of LoginPage", props);
  const [LoginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const ChangeHandler = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setLoginInfo({ ...LoginInfo, [name]: value });
  };

  const SubmitHandler = event => {
    event.preventDefault();
    props.checkLogin(LoginInfo);
  };
  return (
    <>
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
                  <p style={{ color: "red" }}>{props.error}</p>
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
    </>
  );
}

export default withRouter(LoginPage);
