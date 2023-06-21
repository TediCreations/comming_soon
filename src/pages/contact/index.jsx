import React from "react";
import Topbar from "components/Topbar";
import Header from "components/Header";
import PageTitle from "components/PageTitle";
import Footer from "components/Footer";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Header />
        <PageTitle
          title="Contact"
          imagePath={require("assets/img/contact/bg.jpg")}
        />
        <p>Contact</p>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
