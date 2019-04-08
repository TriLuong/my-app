import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { checkPropTypes } from "prop-types";


function RegisterPage(props) {
  // const [state, setState] = useState({})
  const [RegisterInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: ""
  });

  const ChangeHandler = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setRegisterInfo({ ...RegisterInfo, [name]: value });
  };

  const SubmitHandler = event => {
    event.preventDefault();
    props.checkRegister(RegisterInfo);
  };
  return (
    <>
      <Header />
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Signup From</h3>
                <p style={{ color: "red" }}>{props.error}</p>
                <form action="#" onSubmit={SubmitHandler}>
                  <label htmlFor="name">
                    Username <span>**</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter Username or Email address..."
                    name="username"
                    onChange={ChangeHandler}
                  />
                  <label htmlFor="email-id">
                    Email Address <span>**</span>
                  </label>
                  <input
                    id="email-id"
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
                  <div className="mt-10" />
                  <button className="btn theme-btn-2 w-100" type="submit">
                    Register Now
                  </button>
                  <div className="or-divide">
                    <span>or</span>
                  </div>
                  <Link to="/login">
                    <button className="btn theme-btn w-100">login Now</button>
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

export default withRouter(RegisterPage);
