import React from "react";

export default function Cart(props) {
  const deleteProduct = () => {
   props.deleteProducts(props);
  };
  return (
    <li>
      {/* <div className="cart-img">
          <a href="#">
            <img src={props.img_url} alt="" />
          </a>
        </div>{" "} */}
      <div className="cart-content">
        <h3>
          <a href="#">{props.name}</a>
        </h3>
        <div className="cart-price">
          <span className="new">{props.final_price.toLocaleString()} VND</span>
          {props.is_promotion === 1 ? (
            <span>
              <del>{props.price.toLocaleString()} VND </del>
            </span>
          ) : (
            ""
          )}
          <span>x {props.quantity}</span>
        </div>
      </div>
      <div className="del-icon">
        <a href="#" onClick={deleteProduct}>
          <i className="far fa-trash-alt" />
        </a>
      </div>
    </li>
  );
}
