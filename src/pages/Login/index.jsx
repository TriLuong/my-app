import React, { useState} from "react";
import { withRouter } from "react-router-dom";
import HeaderContainer from "../../components/Header/Header.container";
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
    props.checkLogin(LoginInfo,props);
    // console.log(" props.load",  props.load)
    // if (props.error === null && props.load === false) {
    //   try{
    //     props.history.push({ pathname: props.location.state.from });
    //   }
    //   catch {
    //     console.log("aaaa")
    //     props.history.push({ pathname: "/" })
    //   }
      
    // }
  };

  // console.log("props.error",props.error)
  return (
    <>
      <HeaderContainer />
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Đăng nhập</h3>
                <form action="#" onSubmit={SubmitHandler}>
                  <label htmlFor="name">
                    Tên đăng nhập / Email<span>**</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Nhập tên đăng nhâp hoặc Email..."
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
                  <div className="login-action mb-20 fix">
                    <span className="log-rem f-left">
                      <input id="remember" type="checkbox" />
                      <label htmlFor="remember">Remember me!</label>
                    </span>
                    <span className="forgot-login f-right">
                      <a href="#">Quên mật khẩu?</a>
                    </span>
                  </div>
                  <p style={{ color: "red" }}>{props.error}</p>
                  <button className="btn theme-btn-2 w-100" type="submit">
                    Đăng nhập
                  </button>
                  <div className="or-divide">
                    <span>hoặc</span>
                  </div>
                  <Link to="/register">
                    <button className="btn theme-btn w-100">
                      Đăng ký
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
