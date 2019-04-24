import React from "react";
import { Link } from "react-router-dom";
import pageNotFoundImg from "../../assets/pageNotFound.png";
import Footer from "../../components/Footer";
import HeaderContainer from "../../components/Header/Header.container";

export default function NotFound() {
  return (
    <>
      <HeaderContainer />
      <section className="login-area pt-100 pb-100">
        <div className="container" style={{ textAlign: "center" }}>
          <img src={pageNotFoundImg} style={{ height: "20em" }} />
          <h5 style={{ fontWeight: "bold", paddingTop: "1em" }}>
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại!
          </h5>
          <div>
            <div className="checkout-link" style={{ paddingTop: "2em" }}>
              <Link to="/">Quay lại trang chủ</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
