import React from "react";
import { HomeContext } from "../../pages/Home";

export default function SerchWidget() {
  const value = React.useContext(HomeContext);

  const ChangeHandler = event => {
    value.inputValue = event.target.value;
    // console.log(value.inputValue);
  };

  const SubmitHandler = event => {
    value.setInputValue(value.inputValue);
    event.preventDefault(value.inputValue);
  };
  return (
    <div className="shop-widget">
      <h3 className="shop-title">Search by</h3>
      <form action="#" className="shop-search" onSubmit={SubmitHandler}>
        <input
          name="search"
          type="text"
          placeholder="Your keyword...."
          onChange={ChangeHandler}
        />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
}
