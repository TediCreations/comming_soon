import Container from "react-bootstrap/Container";
import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="section section-padding">
          <Container>
            <div className="text-center">
              <a href="/">
                <img
                  src={require("assets/img/logo/logo.png")}
                  alt="Leniko Logo"
                />
              </a>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Logo;
