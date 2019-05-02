import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import HeaderContainer from "../../components/Header/Header.container";

export default function Admin(props) {
  useEffect(() => {
    props.getData();
  }, []);

  if (props.load) {
    console.log("Aaa");
  }

  let data = props.dataOrder;
  let dataArr = [];
  console.log("data", data);
  for (let usersID in data) {
    let userID = data[usersID];
    for (let dates in userID) {
      let date = userID[dates];
      dataArr = [
        ...dataArr,
        {
          userID: usersID,
          date: dates,
          userInfo: date.userInfo,
          orderInfo: date.orderInfo,
          productsSelected: date.productsSelected
        }
      ];
      console.log("dates", dates);
      console.log("date", date);
      console.log("userInfo", date.userInfo);
      console.log("dataArr", dataArr);
      // return (elemtOders = date.userInfo);
      // return <h5>{date.userInfo}</h5>;
    }
  }

  let elemtOrders =
    dataArr &&
    dataArr.map((elemt, index) => {
      let quantity = 0;
      let total = 0;
      return (
        <>
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{elemt.userInfo.email}</td>
            <td>{elemt.orderInfo.name}</td>
            <td>{elemt.orderInfo.address}</td>
            <td>{elemt.orderInfo.phone}</td>

            {elemt.productsSelected.map((elemt, index) => {
              return (
                <>
                  {index === 0 ? (
                    <>
                      <td>{elemt.name}</td>
                      <td>{elemt.quantity}</td>
                      <td>{elemt.final_price.toLocaleString()} VND</td>
                      <td>
                        {(elemt.quantity * elemt.final_price).toLocaleString()}{" "}
                        VND
                      </td>
                    </>
                  ) : null}
                </>
              );
            })}
          </tr>
          {elemt.productsSelected.map((elemt, index) => {
            if (index > 0) {
              return (
                <>
                  <tr key={index}>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>{elemt.name}</td>
                    <td>{elemt.quantity}</td>
                    <td>{elemt.final_price.toLocaleString()} VND</td>
                    <td>
                      {(elemt.quantity * elemt.final_price).toLocaleString()}{" "}
                      VND
                    </td>
                  </tr>
                </>
              );
            }
          })}
          <tr
            style={{
              fontWeight: "bold",
              color: "red",
              backgroundColor: "yellow"
            }}
          >
            <td />
            <td />
            <td />
            <td />
            <td />
            <td>Tổng cộng</td>
            {elemt.productsSelected.forEach((elemt) => {
              quantity += elemt.quantity;
              total += elemt.quantity * elemt.final_price;
            })}
            <td>{quantity}</td>
            <td />
            <td>{total.toLocaleString()} VND</td>
          </tr>
        </>
      );
    });

  return (
    <>
      <HeaderContainer />
      <section className="shop-details-area pt-100 pb-100">
        <br />
        <div className="container">
          <h2>ADMIN - Tổng hợp đơn hàng</h2>
          <p style={{ fontWeight: "bold", color: "red" }}>
            Số lượng đơn hàng: {dataArr ? dataArr.length : 0}
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Email</th>
                <th>Tên người nhận</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Sản phẩm đã đặt</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>{elemtOrders}</tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
}
