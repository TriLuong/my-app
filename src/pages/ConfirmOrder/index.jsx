import React from "react";
import { withRouter, Link } from "react-router-dom";
import Footer from "../../components/Footer";
import HeaderContainer from "../../components/Header/Header.container";
import cartEmptyImg from "../../assets/cart-empty.png";
import { database } from "../../firebase";

function ConfirmOrder(props) {
  // console.log("ConfirmOrder", props);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const productsSelected = props.productsSelected;
  // console.log("props.productsSelected", productsSelected);
  let total = 0;
  let elemtProductsSelected =
    props.productsSelected &&
    props.productsSelected.map((elemt, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{elemt.name}</td>
          <td>{elemt.shop_name}</td>
          <td>
            {elemt.final_price.toLocaleString()} VND
            {elemt.is_promotion ? (
              <div>
                <del>{elemt.price.toLocaleString()} VND</del>
              </div>
            ) : (
              ""
            )}
          </td>
          <td>{elemt.quantity}</td>
          <td>{(elemt.quantity * elemt.final_price).toLocaleString()} VND</td>
        </tr>
      );
    });

  props.productsSelected &&
    props.productsSelected.forEach((elemt) => {
      return (total += elemt.quantity * elemt.final_price);
    });

  const confirmOrder = () => {
    const today = new Date();
    // console.log("today", today);
    database.ref("users/" + userInfo.uid + "/" + today).set({
      userInfo: userInfo,
      orderInfo: props.orderInfo,
      productsSelected: productsSelected
    });
    props.history.push({ pathname: "/ordersuccess" });
  };

  return (
    <>
      <HeaderContainer />
      <section className="shop-details-area pt-100 pb-100">
        {props.productsSelected && props.productsSelected.length !== 0 ? (
          <>
            <div className="container">
              <h2>Thông tin sản phẩm</h2>
              <p>
                Số lượng sản phẩm:{" "}
                {props.productsSelected ? props.productsSelected.length : 0}
              </p>
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Tên shop</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {elemtProductsSelected}
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td style={{ fontWeight: "bold" }}>Tổng cộng</td>
                    <td style={{ fontWeight: "bold" }}>
                      {total.toLocaleString()} VND
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="container">
              <h2 style={{ paddingBottom: "1em" }}>Thông tin người nhận</h2>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Họ và tên</th>
                    <td>{props.orderInfo.name}</td>
                  </tr>
                  <tr>
                    <th>Số điện thoại</th>
                    <td>{props.orderInfo.phone}</td>
                  </tr>
                  <tr>
                    <th>Địa chỉ</th>
                    <td>{props.orderInfo.address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <div
                className="checkout-link"
                style={{ width: "20em", margin: "auto" }}
              >
                <button
                  className="btn theme-btn-2 w-100"
                  onClick={confirmOrder}
                >
                  Xác nhận đơn hàng
                </button>
                <span> </span>
                <Link
                  to="/"
                  style={{
                    display: "block",
                    marginTop: "1em",
                    backgroundColor: "red"
                  }}
                >
                  Hủy bỏ
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container" style={{ textAlign: "center" }}>
              <img src={cartEmptyImg} style={{ height: "20em" }} />
              <h5 style={{ fontWeight: "bold", paddingTop: "1em" }}>
                KHÔNG CÓ SẢN PHẨM NÀO
              </h5>
              <div>
                <div className="checkout-link" style={{ paddingTop: "2em" }}>
                  <Link to="/">Tiếp tục mua sắm</Link>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}

export default withRouter(ConfirmOrder);
