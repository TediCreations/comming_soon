import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Logo from "components/Logo";
import Spinner from "components/Spinner";
import Footer from "components/Footer";

const styleObj = {
  color: "#393a3b",
};

function App() {
  return (
    <React.Fragment>
      <br />
      <br />
      <Logo />
      <div className="section section-padding">
        <Container>
          <div className="text-center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Spinner size="75" />
            <br />
            <br />
            <h3 style={styleObj}>Leniko is on a short break...</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
