import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LanguageAndCurrency from "components/LanguageAndCurrency";
import Logo from "components/Logo";
import Tools from "components/Tools";
import Menu from "components/Menu";
import Drawer from "components/Drawer";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* Header Section Start */}
        <div className="header-section section bg-white d-none d-xl-block">
          <Container>
            <Row className="text-center row-cols-1">
              <Col>
                <Logo />
              </Col>
            </Row>
          </Container>
        </div>
        {/* Header Section End */}
      </React.Fragment>
    );
  }
}

export default Header;
