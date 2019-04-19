import React from "react";
import orderSuccessImg from "../../assets/order-success.png";
import HeaderContainer from "../../components/Header/Header.container";
import Footer from "../../components/Footer";

export default function OrderSuccess() {
  return (
    <>
      <HeaderContainer />
      <section className="login-area pt-100 pb-100">
        <div className="container" style={{ textAlign: "center" }}>
          <img src={orderSuccessImg} style={{ height: "20em" }} />
          <h5 style={{ fontWeight: "bold", paddingTop: "1em" }}>
            XÁC NHẬN ĐƠN HÀNG THÀNH CÔNG
          </h5>
          <div>
            <div className="checkout-link" style={{ paddingTop: "2em" }}>
              <a href="/">Tiếp tục mua sắm</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
