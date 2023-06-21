import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Topbar extends React.Component {
  constructor() {
    super();
    this.state = {
      anouncement: "Free shipping for orders over $80",
      storeLocationUrl: "/#",
      orderStatusUrl: "/#",
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* Topbar Section Start */}
        <div className="topbar-section bg-primary2">
          <Container>
            <Row className="justify-content-between align-items-center">
              <Col xs={12} md="auto">
                <p className="text-white text-center text-md-left my-2">
                  {this.state.anouncement}
                </p>
              </Col>
              <Col xs="auto" className="d-none d-md-block">
                <div className="topbar-menu">
                  <ul>
                    <li>
                      <Link
                        to={this.state.storeLocationUrl}
                        className="text-white"
                      >
                        <i>
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </i>
                        Store Location
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={this.state.orderStatusUrl}
                        className="text-white"
                      >
                        <i>
                          <FontAwesomeIcon icon={faTruck} />
                        </i>
                        Order Status
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Topbar Section End */}
      </React.Fragment>
    );
  }
}

export default Topbar;
