import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  // console.log("props of ProductItem", props)
  // const [state, setState] = useState("");

  let state = "";
  const select = () => {
    props.selectProducts(props);
  };

  if (props.productsSelected !== null) {
    const productSelected = props.productsSelected.find(
      elemt => elemt.id === props.id
    );
    //  console.log(productSelected.state);
    if (productSelected == null) {
      state = "";
    } else {
      state = productSelected.state;
    }
    
  }


  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="product-wrapper mb-50">
        <div className="product-img mb-25">
          <a href="javascript:void(0)">
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
            <a href="javascript:void(0)">{props.shop_name} {state}</a>
          </div>
          <h4>
            <a href="javascript:void(0)">{props.name}</a>
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
