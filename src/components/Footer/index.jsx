import React from "react";
import logo from "../../assets/shop-logo.png";
import time from "../../assets/time.png";

export default function Footer() {
  return (
    <footer className="footer-area pl-100 pr-100">
      <div
        className="footer-area box-90 pt-100 pb-60"
        data-background="img/bg/footer.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-6 ">
              <div className="footer-widget mb-40 pr-70">
                <div className="footer-logo">
                  <a href="#">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore mag na
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="footer-time d-flex mt-30">
                  <div className="time-icon">
                    <img src={time} alt="" />
                  </div>
                  <div className="time-text">
                    <span>Hotline</span>
                    <h2>(0600) 874 548</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-3">
              <div className="footer-widget mb-40">
                <h3>Kết nối</h3>
                <ul className="footer-link">
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Behance</a>
                  </li>
                  <li>
                    <a href="#"> Dribbble</a>
                  </li>
                  <li>
                    <a href="#">Linkedin</a>
                  </li>
                  <li>
                    <a href="#">Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-3 d-md-none d-xl-block">
              <div className="footer-widget pl-50 mb-40">
                <h3>Chi nhánh</h3>
                <ul className="footer-link">
                  <li>
                    <a href="#">Hà Nội</a>
                  </li>
                  <li>
                    <a href="#">Hải Phòng</a>
                  </li>
                  <li>
                    <a href="#">Đà Nẵng</a>
                  </li>
                  <li>
                    <a href="#">Đà Lạt</a>
                  </li>
                  <li>
                    <a href="#">Tp Hồ Chí Minh</a>
                  </li>
                  <li>
                    <a href="#">Cần Thơ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-3">
              <div className="footer-widget mb-40">
                <h3>Giới thiệu</h3>
                <ul className="footer-link">
                  <li>
                    <a href="#">Điều khoản sử dụng</a>
                  </li>
                  <li>
                    <a href="#"> Chính sách bảo mật</a>
                  </li>
                  <li>
                    <a href="#">Liên Hệ</a>
                  </li>
                  <li>
                    <a href="#">Câu hỏi thường gặp</a>
                  </li>
                  <li>
                    <a href="#">Tư vấn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
