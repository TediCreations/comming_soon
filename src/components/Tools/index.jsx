import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class Tools extends React.Component {
  constructor() {
    super();
    this.state = {
      wishlistCount: 0,
      cartCount: 0,
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* Header Tools Start */}
        <div className="col">
          <div className="header-tools justify-content-end">
            <div className="header-login">
              <a href="my-account.html">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
              </a>
            </div>
            <div className="header-search">
              <a href="/#offcanvas-search" className="offcanvas-toggle">
                <i>
                  <FontAwesomeIcon icon={faSearch} />
                </i>
              </a>
            </div>
            <div className="header-wishlist">
              <a href="/#offcanvas-wishlist" className="offcanvas-toggle">
                <span className="wishlist-count">
                  {this.state.wishlistCount}
                </span>
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
              </a>
            </div>
            <div className="header-cart">
              <a href="/#offcanvas-cart" className="offcanvas-toggle">
                <span className="cart-count">{this.state.cartCount}</span>
                <i>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </i>
              </a>
            </div>
          </div>
        </div>
        {/* Header Tools End */}
      </React.Fragment>
    );
  }
}

export default Tools;
