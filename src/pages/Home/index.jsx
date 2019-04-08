import React, { useState } from "react";
import "./Home.css";
import HeaderContainer from "../../components/Header/Header.container"
import Footer from "../../components/Footer";
import data from "../../dataProductList.json";
import ProducListContainer from "../../components/ProductList/Product.container"

// import {
//   loginRequest,
//   loginSuccess,
//   loginFail
// } from "../../redux/Login/Login.action";

// import {
//   registerRequest,
//   registerSuccess,
//   registerFail,
// } from "../../redux/Register/Register.action"


// import {
//   productListRequest,
//   productListSuccess,
//   productListFail
// } from "../../redux/ProductList/ProductList.action"

// import cartContextProvider from "../../hooks/cartContext";

// store.subscribe(()=>{
//   const state = store.getState();
//   console.log(state);
// });
// store.dispatch(loginRequest());
// store.dispatch(loginSuccess());
// store.dispatch(loginFail());

// store.dispatch(registerRequest());
// store.dispatch(registerSuccess());
// store.dispatch(registerFail());

// store.dispatch(productDetailRequest());
// store.dispatch(productDetailSuccess());
// store.dispatch(productDetailFail());

// store.dispatch(productListRequest());
// store.dispatch(productListSuccess());
// store.dispatch(productListFail());


export const HomeContext = React.createContext(0);
const Provider = HomeContext.Provider;

function Home() {
  // const [state, setState] = useState();
  const [product, setProduct] = useState([]);
  const [countProduct, setCountProduct] = useState(0);
  const [dataSort, setDataSort] = useState(data);

  const setProductSelect = props => {
    let isSelect = false;
    const productSelected = { ...props, quantity: 1 };

    product.forEach((elemt, index) => {
      if (elemt.id === props.id) {
        elemt.quantity = elemt.quantity + 1;
        isSelect = true;
      }
    });

    if (isSelect === false) {
      // console.log("a");
      setProduct([...product, productSelected]);
      setCountProduct(countProduct + 1);
    } else {
      // console.log("b");
      setProduct([...product]);
    }
  };
  return (
    <>
      <HeaderContainer />
      <ProducListContainer />
      <Footer />
    </>
  );
}

export default Home;
