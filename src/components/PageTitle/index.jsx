import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
};

const defaultProps = {
  title: "Title",
  imagePath: require("assets/images/bg/page-title-1.jpg"),
};

class PageTitle extends React.Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.imagePath = props.imagePath;
  }

  render() {
    return (
      <React.Fragment>
        {/* Page Title/Header Start  */}
        <div
          style={{
            backgroundImage: "url(" + this.imagePath + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="page-title-section section"
          // data-bg-image={require("assets/images/bg/page-title-1.jpg")}
        >
          <Container>
            <Row>
              <Col>
                <div className="page-title">
                  <h1 className="title">{this.title}</h1>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">{this.title}</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Page Title/Header End */}
      </React.Fragment>
    );
  }
}

PageTitle.propTypes = propTypes;
PageTitle.defaultProps = defaultProps;

export default PageTitle;
