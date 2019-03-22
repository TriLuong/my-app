import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
// import cartContextProvider from "../../hooks/cartContext";

export const HomeContext = React.createContext(0);
const Provider = HomeContext.Provider;

function Home() {
  // const [state, setState] = useState();
  const [total, setTotal] = useState(0);
  const [product, setProduct] = useState([]);
  const [countProduct, setCountProduct] = useState(0);

  return (
    <Provider
      value={{ total, setTotal, product, setProduct, countProduct, setCountProduct }}
    >
      <Header />
      <ProductList />
      <Footer />
    </Provider>
  );
}

export default Home;
