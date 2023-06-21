import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const propTypes = {
  previousUrl: PropTypes.string,
  imagePath: PropTypes.string,
};

const defaultProps = {
  previousUrl: "/#",
  imagePath: require("assets/img/bg-404.jpg"),
};

class Page404 extends React.Component {
  constructor(props) {
    super();
    this.previousUrl = props.previousUrl;
    this.imagePath = props.imagePath;
    this.homePageUrl = "/";
  }
  render() {
    return (
      <React.Fragment>
        {/* <!-- 404 Section Start --> */}
        <div
          style={{
            backgroundImage: "url(" + this.imagePath + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="section-404 section"
          // data-bg-image="assets/images/bg/bg-404.jpg"
        >
          <Container>
            <div className="content-404">
              <h1 className="title">Oops!</h1>
              <h2 className="sub-title">Page not found!</h2>
              <p>You could either go back or go to homepage</p>
              <div className="buttons">
                <Link
                  className="btn btn-primary btn-outline-hover-dark"
                  to={this.previousUrl}
                >
                  Go back
                </Link>
                <Link
                  className="btn btn-dark btn-outline-hover-dark"
                  to={this.homePageUrl}
                >
                  Homepage
                </Link>
              </div>
            </div>
          </Container>
        </div>
        {/* <!-- 404 Section End --> */}
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

Page404.propTypes = propTypes;
Page404.defaultProps = defaultProps;

export default Page404;
