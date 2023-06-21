import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faFrown } from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";

const propTypes = {
  salesPercentage: PropTypes.number,
  isOutOfStock: PropTypes.bool,
  isFeatured: PropTypes.bool,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  imageHoverUrl: PropTypes.string,
  price: PropTypes.number,
};

const defaultProps = {
  salesPercentage: 0,
  isOutOfStock: false,
  isFeatured: false,
  imageUrl: null,
  title: "",
  imageHoverUrl: null,
  price: 0,
};

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["#0000ff", "#00ff00", "#ff0000", "#0f0f0f"],
      sizes: ["Small", "Medium", "Large"],
    };

    this.salesPercentage = props.salesPercentage;
    this.isOutOfStock = props.isOutOfStock;
    this.isFeatured = props.isFeatured;
    this.imageUrl = props.imageUrl;
    this.title = props.title;
    this.imageHoverUrl = props.imageHoverUrl;
    this.price = props.price;
  }

  render() {
    var areProductOptions =
      this.state.colors.length > 0 || this.state.sizes.length > 0;
    return (
      <React.Fragment>
        {/*Product Start*/}
        <Col>
          <div className="product">
            <div className="product-thumb">
              <a href="product-details.html" className="image">
                <span className="product-badges">
                  {/* Sales percentage */}
                  {this.salesPercentage > 0 && (
                    <span className="onsale">-{this.salesPercentage}%</span>
                  )}
                  {/* Sales percentage end */}
                  {/* Out of stock start */}
                  {this.isOutOfStock && (
                    <span className="outofstock">
                      <i>
                        <FontAwesomeIcon icon={faFrown} />
                      </i>
                    </span>
                  )}
                  {/* Out of stock end */}
                  {/* Featured start */}
                  {this.isFeatured && (
                    <span className="hot">
                      <i>
                        <FontAwesomeIcon icon={faFire} />
                      </i>
                    </span>
                  )}
                  {/* Featured end */}
                </span>
                {/* Product images start */}
                {(this.imageUrl && (
                  <img src={this.imageUrl} alt={this.title} />
                )) || (
                  <img
                    src={require("assets/img/shop/placeholder_328x437.jpg")}
                    alt="Product placeholder"
                  />
                )}
                {this.imageHoverUrl && (
                  <img
                    className="image-hover "
                    src={this.imageHoverUrl}
                    alt={this.title + " hover"}
                  />
                )}
                {/* Product images end */}
              </a>
              <a
                href="wishlist.html"
                className="add-to-wishlist hintT-left"
                data-hint="Add to wishlist"
              >
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
              </a>
              {/* Product options start */}
              {areProductOptions && (
                <div className="product-options">
                  {/* Colors start */}
                  <ul className="colors">
                    {this.state.colors.map((color, i) => (
                      <li key={i} style={{ backgroundColor: color }}>
                        Color {i}
                      </li>
                    ))}
                  </ul>
                  {/* Colors end */}
                  {/* Sizes start */}
                  <ul className="sizes">
                    {this.state.sizes.map((size, i) => (
                      <li key={i}>{size}</li>
                    ))}
                  </ul>
                  {/* Sizes end */}
                </div>
              )}
              {/* Product options end */}
            </div>
            <div className="product-info">
              {/* Title start */}
              <h6 className="title">
                <a href="product-details.html">{this.title}</a>
              </h6>
              {/* Title end */}
              {/* Price start */}
              <span className="price">
                {(this.salesPercentage > 0 && (
                  <>
                    <span className="old">
                      {this.price + " "}
                      <FontAwesomeIcon icon={faEuroSign} />
                    </span>
                    <span className="new">
                      {(this.price * (100 - this.salesPercentage)) / 100 + " "}
                      <FontAwesomeIcon icon={faEuroSign} />
                    </span>
                  </>
                )) || (
                  <span className="new">
                    {this.price + " "}
                    <FontAwesomeIcon icon={faEuroSign} />
                  </span>
                )}
              </span>
              {/* Price end */}
              <div className="product-buttons">
                <a
                  href="/#quickViewModal"
                  data-toggle="modal"
                  className="product-button hintT-top"
                  data-hint="Quick View"
                >
                  <i>
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                </a>
                <a
                  href="/#"
                  className="product-button hintT-top"
                  data-hint="Add to Cart"
                >
                  <i>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </i>
                </a>
                <a
                  href="/#"
                  className="product-button hintT-top"
                  data-hint="Compare"
                >
                  <i>
                    <FontAwesomeIcon icon={faRandom} />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        {/* Product End */}
      </React.Fragment>
    );
  }
}

Product.propTypes = propTypes;
Product.defaultProps = defaultProps;

export default Product;
