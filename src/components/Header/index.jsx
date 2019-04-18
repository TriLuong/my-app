import React from "react";
import logo from "../../assets/logo_shop.png";
import CartContainer from "./Cart/Cart.container";
import { Link } from "react-router-dom"

export default function Header(props) {
  // console.log("props of Header", props)
  let total = 0;
  const countProduct = props.productCount;
  const productsSelected = props.productSelected;
  if (productsSelected !== null) {
    productsSelected.forEach((elemt, index) => {
      total += elemt.final_price * elemt.quantity;
    })
  }

  return (
    <header>
      <div id="header-sticky" className="header-area box-90 sticky-header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
              <div className="main-menu text-center">
                <nav id="mobile-menu" style={{ display: "block" }}>
                  <ul>
                    <li>
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                      <a href="javascrip:void(0)">Sản Phẩm </a>
                    </li>
                    <li>
                      <a href="javascrip:void(0)">Liên hệ</a>
                    </li>
                    <li>
                      <a href="javascrip:void(0)">Giới thiệu</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
              <div className="header-right f-right">
                <ul>
                  <li className="search-btn">
                    <a
                      className="search-btn nav-search search-trigger"
                      href="#"
                    >
                      <i className="fas fa-search" />
                    </a>
                  </li>
                  <li className="login-btn">
                    <Link to="/login">
                      <i className="far fa-user" />
                    </Link>
                  </li>
                  <li className="d-shop-cart">
                    <a href="javascrip:void(0)">
                      <i className="fas fa-shopping-cart" />{" "}
                      <span className="cart-count">{countProduct}</span>
                    </a>
                    <ul className="minicart" >
                      <ul style={{	maxHeight:"350px",	overflow:"auto"}}>
                      {productsSelected !== null
                        ? productsSelected.map((elemt, index) => {
                          return elemt.quantity !== 0 ?
                            <CartContainer key={index} {...elemt} /> : "";
                        })
                        : ""}
                      </ul>
                      <li>
                        <div className="total-price">
                          <span className="f-left">Tổng cộng:</span>
                          <span className="f-right">{total.toLocaleString()} VND</span>
                        </div>
                      </li>
                      <li>
                        <div className="checkout-link">
                          <Link to="/checkout">Kiểm tra giỏ hàng</Link>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 d-xl-none">
              <div className="mobile-menu" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
