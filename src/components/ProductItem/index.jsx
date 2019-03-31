import React, { useState } from "react";
// import useCart from "../../hooks/useCart"
import { HomeContext } from "../../pages/Home";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  const value = React.useContext(HomeContext);
  const [state, setState] = useState("");
  // const [isSelect, setSelect] = useState(false);

  // const findIndex = id => {
  //   var result = -1;
  //   value.product.forEach((elemt, index) => {
  //     if (elemt.id === id) {
  //       result = index;
  //     }
  //   });
  //   return result;
  // };

  const select = () => {
    setState("(Selected)");
    value.setProductSelect(props);
    // let isSelect = false;
    // const objProduct = { ...props, quantity: 1};
    
    // value.product.forEach((elemt, index) => {
    //   if (elemt.id === props.id) {
    //     elemt.quantity = elemt.quantity + 1;
    //     isSelect = true;
    //   }
      
    // });

    // if (isSelect === false) {
    //   console.log("a");
    //   value.setProduct([...value.product, objProduct]);
    //   value.setCountProduct(value.countProduct+1);
    // } else {
    //   value.setProduct([...value.product]);
    // }
    // // console.log
    // value.product.forEach((elemt, index) => {
    //   value.setTotal(elemt.final_price*elemt.quantity);
    // });
    // console.log(value.product);
    // if (isSelect=== false) {
    //   setState("(Selected)");
      
    //   // console.log(props.quatity + 1);
    //   // value.countProduct = value.countProduct + 1;
    //   value.setCountProduct(value.countProduct+1);
    //   value.setProductSelected(props);
    // }
    // if (isSelect === false) {
    //   // console.log(props.name);
    //   setState("(Selected)");
    //   value.setCountProduct(value.countProduct + 1);
    //   c
    //   value.setTotal(value.total + props.final_price);
    // } else {
    //   setState();
    //   value.setCountProduct(value.countProduct - 1);
    //   if (value.countProduct < 0) value.setCountProduct(0);
    //   value.product.splice(findIndex(props.id), 1);
    //   value.setTotal(value.total - props.final_price);
    // }
    // setSelect(!isSelect);
    // value.setProduct(value.product);

    // console.log("value.total", value.total);
    // console.log("value.product", value.product);
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
          <a href="#">
            <img src={props.img_url} alt="" />
          </a>
          <div className="product-action text-center">
            <a title="Shoppingb Cart" onClick={select}>
              <i className="fas fa-shopping-cart" />
            </a>
            <Link to={`/product/${props.id}`} title="Quick View">
              <i className="fas fa-search" />
            </Link>
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
