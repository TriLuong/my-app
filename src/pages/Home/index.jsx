import React, { useState } from "react";
import "./Home.css";
import HeaderContainer from "../../components/Header/Header.container"
import Footer from "../../components/Footer";
import ProducListContainer from "../../components/ProductList/Product.container"

function Home() {
  return (
    <>
      <HeaderContainer />
      <ProducListContainer />
      <Footer />
    </>
  );
}

export default Home;
