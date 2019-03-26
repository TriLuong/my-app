import React from "react";
import { HomeContext } from "../../pages/Home";

export default function Cart(props) {
  console.log(props);
  const value = React.useContext(HomeContext);

  const findIndex = id => {
    var result = -1;
    value.product.forEach((elemt, index) => {
      if (elemt.id === id) {
        result = index;
      }
    });
    return result;
  };

  const deleteProduct = () => {
      // setState();
      value.setCountProduct(value.countProduct - 1);
      if (value.countProduct < 0) value.setCountProduct(0);
      value.product.splice(findIndex(props.id), 1);
      value.setTotal(value.total - props.final_price);
  }
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
            <span className="new">
              {props.final_price.toLocaleString()} VND
            </span>
            {props.is_promotion === 1 ? (
              <span>
                <del>{props.price.toLocaleString()} VND</del>
              </span>
            ) : (
              ""
            )}
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
