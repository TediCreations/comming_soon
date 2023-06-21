import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor() {
    super();
    this.name = "leniko";
    this.date = "2023";
    this.email = "contact@leniko.gr";
    this.youtubeUrl = "https://www.youtube.com/";
    this.instagramUrl = "https://www.instragram.com/";
    this.twitterUrl = "https://www.twitter.com/";
    this.facebookUrl = "https://www.facebook.com/";
    this.menu = [
      { label: "About us", url: "/#" },
      { label: "Store location", url: "/#" },
      { label: "Contact", url: "/contact" },
      { label: "Support", url: "/#" },
      { label: "Policy", url: "/#" },
      { label: "FAQs", url: "/#" },
    ];
  }

  render() {
    return (
      <React.Fragment>
        {/* Footer start */}
        <div className="footer1-section section section-padding">
          <Container>
            <Row className="text-center row-cols-1">
              <Col className="footer1-copyright">
                <p className="copyright">
                  <a href={"mailto:" + this.email}>{this.email}</a>
                </p>
                <p className="copyright">
                  &copy; {this.date} {this.name}. All Rights Reserved
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Footer end */}
      </React.Fragment>
    );
  }
}

export default Footer;
