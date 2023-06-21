import React from "react";
import Topbar from "components/Topbar";
import Header from "components/Header";
import SaleBanner from "components/SaleBanner";
import Products from "components/Products";
import Footer from "components/Footer";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Header />
        <SaleBanner />
        <Products />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
