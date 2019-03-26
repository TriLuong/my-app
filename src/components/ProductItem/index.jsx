import React, { useState } from "react";
// import useCart from "../../hooks/useCart"
import { HomeContext } from "../../pages/Home";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  const value = React.useContext(HomeContext);
  const [state, setState] = useState();
  const [isSelect, setSelect] = useState(false);

  const findIndex = id => {
    var result = -1;
    value.product.forEach((elemt, index) => {
      if (elemt.id === id) {
        result = index;
      }
    });
    return result;
  };

  const select = () => {
    if (isSelect === false) {
      // console.log(props.name);
      setState("(Selected)");
      value.setCountProduct(value.countProduct + 1);
      value.product.push(props);
      value.setTotal(value.total + props.final_price);
    } else {
      setState();
      value.setCountProduct(value.countProduct - 1);
      if (value.countProduct < 0) value.setCountProduct(0);
      value.product.splice(findIndex(props.id), 1);
      value.setTotal(value.total - props.final_price);
    }
    setSelect(!isSelect);
    value.setProduct(value.product);

    console.log("value.total", value.total);
    console.log("value.product", value.product);
  };

  // const [state, setState] = useState();
  // const [isSelect, setSelect] = useState(false);

  // const select = () => {
  //   if (isSelect === false) {
  //     setState("(Selected)");
  //     setSelect(true);
  //   }
  //   else {
  //     setState();
  //   }
  //   console.log(props.name, props.id);
  //   setSelect(!isSelect);
  // }
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="product-wrapper mb-50">
        <div className="product-img mb-25">
          <Link to={`/product/${props.id}`}>
            <img src={props.img_url} alt="" />
          </Link>
          <div className="product-action text-center">
            <a title="Shoppingb Cart" onClick={select}>
              <i className="fas fa-shopping-cart" />
            </a>
            
              <i className="fas fa-search" />
            
          </div>
        </div>
        <div className="product-content pr-0">
          <div className="pro-cat mb-10">
            <a href="#">USB {state}</a>
          </div>
          <h4>
            <a href="#">{props.name}</a>
          </h4>
          <div className="product-meta">
            <div className="pro-price">
              <span>{props.final_price.toLocaleString()} VND</span>
              {props.is_promotion === 1 ? (
                <span className="old-price">
                  {props.price.toLocaleString()} VND
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
