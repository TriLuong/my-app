import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import HeaderContainer from "../../components/Header/Header.container"
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
      <HeaderContainer />
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Đăng ký</h3>
                <p style={{ color: "red" }}>{props.error}</p>
                <form action="#" onSubmit={SubmitHandler}>
                  <label htmlFor="name">
                    Tên đăng nhập<span>**</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Nhập tên đăng nhập..."
                    name="username"
                    onChange={ChangeHandler}
                  />
                  <label htmlFor="email-id">
                    Đại chỉ Email <span>**</span>
                  </label>
                  <input
                    id="email-id"
                    type="text"
                    placeholder="Nhập địa chỉ  Email..."
                    name="email"
                    onChange={ChangeHandler}
                  />
                  <label htmlFor="pass">
                    Mật khẩu <span>**</span>
                  </label>
                  <input
                    id="pass"
                    type="password"
                    placeholder="Nhập mật khẩu..."
                    name="password"
                    onChange={ChangeHandler}
                  />
                  <div className="mt-10" />
                  <button className="btn theme-btn-2 w-100" type="submit">
                    Đăng ký
                  </button>
                  <div className="or-divide">
                    <span>hoặc</span>
                  </div>
                  <Link to="/login">
                    <button className="btn theme-btn w-100">Đăng nhập</button>
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
