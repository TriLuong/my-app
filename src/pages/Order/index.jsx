import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import HeaderContainer from "../../components/Header/Header.container";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { checkPropTypes } from "prop-types";

function Order(props) {
  // const [state, setState] = useState({})
  const [orderInfo, setOrderInfo] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const ChangeHandler = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setOrderInfo({ ...orderInfo, [name]: value });
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    // console.log("thong tin dat hang", orderInfo);
    props.setOrderInfo(orderInfo, props);
  };
  return (
    <>
      <HeaderContainer />
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Thông tin giao hàng</h3>

                <form action="#" onSubmit={SubmitHandler}>
                  <label htmlFor="name">
                    Họ và Tên<span>**</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Nhập họ và tên..."
                    name="name"
                    onChange={ChangeHandler}
                  />
                  <label htmlFor="number">
                    Số điện thoại <span>**</span>
                  </label>
                  <input
                    id="phone-id"
                    type="number"
                    placeholder="Nhập số điện thoại..."
                    name="phone"
                    onChange={ChangeHandler}
                  />
                  <label>
                    Địa chỉ <span>**</span>
                  </label>
                  <input
                    id="address-id"
                    type="tẽt"
                    placeholder="Nhập địa chit người nhận..."
                    name="address"
                    onChange={ChangeHandler}
                  />
                  <div className="mt-10" />

                  <button className="btn theme-btn-2 w-100" type="submit">
                    Tiến hành đặt hàng
                  </button>

                  <div className="or-divide">
                    <span>hoặc</span>
                  </div>
                  <Link to="/">
                    <button className="btn theme-btn w-100">Hủy bỏ</button>
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

export default withRouter(Order);
