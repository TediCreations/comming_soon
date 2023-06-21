import React from "react";
import Topbar from "components/Topbar";
import Header from "components/Header";
import PageTitle from "components/PageTitle";
import Footer from "components/Footer";
import ProductFilterBar from "components/ProductFilterBar";
import Products from "components/Products";

class Shop extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Header />
        <PageTitle title="Shop" imagePath={require("assets/img/shop/bg.jpg")} />
        <ProductFilterBar />
        <Products />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Shop;
