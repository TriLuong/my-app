import React, { Component } from "react";
import "./Home.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <ProductList />
        <Footer />
      </>
    );
  }
}

export default Home;
