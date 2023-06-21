import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Title from "components/Title";

class SaleBanner extends React.Component {
  constructor() {
    super();
    this.state = {
      saleText: "Spring sale",
      salePercentage: 25,
      nextPurchacePercentage: 10,
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* Sale Banner Section Start */}
        <div className="section section-padding">
          <Container>
            <Title title="Color in simplicity" subtitle="Metal & Macrame" />
            <Row className="learts-mb-n40">
              <div className="col-lg-5 col-md-6 col-12 mr-auto learts-mb-40">
                <div
                  className="sale-banner1"
                  data-bg-image={require("assets/images/banner/sale/sale-banner1-1.png")}
                >
                  <div className="inner">
                    <img
                      src={require("assets/images/banner/sale/sale-banner1-1.1.png")}
                      alt="Sale Banner Icon"
                    />
                    <span className="title">{this.state.saleText}</span>
                    <h2 className="sale-percent">
                      <span className="number">
                        {this.state.salePercentage}
                      </span>{" "}
                      % <br /> off
                    </h2>
                    <a href="shop.html" className="link">
                      shop now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12 learts-mb-40">
                <div className="sale-banner2">
                  <div className="inner">
                    <div className="image">
                      <img
                        src={require("assets/images/banner/sale/sale-banner2-1.jpg")}
                        alt=""
                      />
                    </div>
                    <Row className="content justify-content-between mb-n3">
                      <div className="col-auto mb-3">
                        <h2 className="sale-percent">
                          {this.state.nextPurchacePercentage}% off
                        </h2>
                        <span className="text">YOUR NEXT PURCHASE</span>
                      </div>
                      <div className="col-auto mb-3">
                        <a className="btn btn-hover-dark" href="shop.html">
                          SHOP NOW
                        </a>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
        {/* Sale Banner Section End */}
      </React.Fragment>
    );
  }
}

export default SaleBanner;
