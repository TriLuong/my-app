import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import data from "../../dataProductList.json";

// import cartContextProvider from "../../hooks/cartContext";

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
    <Provider
      value={{
        dataSort,
        setDataSort,
        product,
        setProductSelect,
        countProduct,
        setCountProduct
      }}
    >
      <Header />
      <ProductList />
      <Footer />
    </Provider>
  );
}

export default Home;
