import React from "react";
import { HomeContext } from "../../pages/Home";

export default function Cart(props) {
  const value = React.useContext(HomeContext);
  console.log(props);
  let total=0;
  // console.log("total", total);
  value.total += props.final_price ;
  console.log("value.total",value.total);
  value.setTotal(total);
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
          <a href="#">
            <i className="far fa-trash-alt" />
          </a>
        </div>
      </li>
      
    
  );
}
