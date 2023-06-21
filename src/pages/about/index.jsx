import React from "react";
import Topbar from "components/Topbar";
import Header from "components/Header";
import PageTitle from "components/PageTitle";
import Footer from "components/Footer";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Header />
        <PageTitle
          title="About"
          imagePath={require("assets/img/about/bg.jpg")}
        />
        <p>About</p>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
