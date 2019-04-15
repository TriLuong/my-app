import React from "react";
import { HomeContext } from "../../../pages/Home";

export default function SerchWidget(props) {
  const [inputValue, setInputValue] = React.useState();
  // console.log("Search",props)

  const ChangeHandler = event => {
    var target = event.target;
    var value = target.value;
    var name = target.name;
    setInputValue({[name]: value});
    // console.log(inputValue);
  };

  const SubmitHandler = event => {
    event.preventDefault();
    // console.log("inputValue",(inputValue.search));
    props.searchProducts(inputValue.search.split(' ').join('+'));
    // console.log("Search Product",props.products);
  };
  return (
    <div className="shop-widget">
      <h3 className="shop-title">Tìm kiếm</h3>
      <form action="#" className="shop-search" onSubmit={SubmitHandler}>
        <input
          name="search"
          type="text"
          placeholder="Nhập tên sản phẩm..."
          onChange={ChangeHandler}
        />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
}
