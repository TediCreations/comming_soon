import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Topbar from "components/Topbar";
import Header from "components/Header";
import SaleBanner from "components/SaleBanner";
import Products from "components/Products";
import Footer from "components/Footer";

class LeartsBad extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Header />
        {/* Header Sticky Section Start */}
        <div className="sticky-header header-menu-center section bg-white d-none d-xl-block">
          <Container>
            <Row className="align-items-center">
              {/* Header Logo Start */}
              <div className="col">
                <div className="header-logo">
                  <a href="index.html">
                    <img
                      src={require("assets/images/logo/logo-2.png")}
                      alt="Learts Logo"
                    />
                  </a>
                </div>
              </div>
              {/* Header Logo End */}
              {/* Search Start */}
              <div className="col d-none d-xl-block">
                <nav className="site-main-menu justify-content-center">
                  <ul>
                    <li className="has-children">
                      <a href="/#">
                        <span className="menu-text">Home</span>
                      </a>
                      <ul className="sub-menu mega-menu">
                        <li>
                          <a href="/#" className="mega-menu-title">
                            <span className="menu-text">HOME GROUP</span>
                          </a>
                          <ul>
                            <li>
                              {" "}
                              <img
                                className="mmh_img "
                                src={require("assets/images/demo/menu/home-01.jpg")}
                              />{" "}
                              <a href="index.html">
                                <span className="menu-text">
                                  Arts Propelled
                                </span>
                              </a>
                            </li>
                            <li>
                              {" "}
                              <img
                                className="mmh_img "
                                src={require("assets/images/demo/menu/home-02.jpg")}
                              />{" "}
                              <a href="index-2.html">
                                <span className="menu-text">
                                  Decor Thriving
                                </span>
                              </a>
                            </li>
                            <li>
                              {" "}
                              <img
                                className="mmh_img "
                                src={require("assets/images/demo/menu/home-03.jpg")}
                              />{" "}
                              <a href="index-3.html">
                                <span className="menu-text">Savvy Delight</span>
                              </a>
                            </li>
                            <li>
                              {" "}
                              <img
                                className="mmh_img "
                                src={require("assets/images/demo/menu/home-04.jpg")}
                              />{" "}
                              <a href="index-4.html">
                                <span className="menu-text">
                                  Perfect Escapes
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="index-2.html" className="mega-menu-title">
                            <span className="menu-text">HOME GROUP</span>
                          </a>
                          <ul>
                            <li>
                              {" "}
                              <img
                                className="mmh_img "
                                src={require("assets/images/demo/menu/home-05.jpg")}
                              />{" "}
                              <a href="index-5.html">
                                <span className="menu-text">Kitchen Cozy</span>
                              </a>
                            </li>
                            <li>
                              {" "}
                              <img
                                className="mmh_img "
                                src={require("assets/images/demo/menu/home-06.jpg")}
                              />{" "}
                              <a href="index-6.html">
                                <span className="menu-text">
                                  Dreamy Designs
                                </span>
                              </a>
                            </li>
                            <li>
                              {" "}
                              <img
                                className="mmh_img "
                                src={require("assets/images/demo/menu/home-07.jpg")}
                              />{" "}
                              <a href="index-7.html">
                                <span className="menu-text">
                                  Crispy Recipes
                                </span>
                              </a>
                            </li>
                            <li>
                              {" "}
                              <img
                                className="mmh_img "
                                src={require("assets/images/demo/menu/home-08.jpg")}
                              />{" "}
                              <a href="index-8.html">
                                <span className="menu-text">
                                  Decoholic Chic
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="index-2.html" className="mega-menu-title">
                            <span className="menu-text">HOME GROUP</span>
                          </a>
                          <ul>
                            <li>
                              {" "}
                              <img
                                className="mmh_img "
                                src={require("assets/images/demo/menu/home-9.jpg")}
                              />{" "}
                              <a href="index-9.html">
                                <span className="menu-text">
                                  Reblended Dish
                                </span>
                              </a>
                            </li>
                            <li>
                              {" "}
                              <img
                                className="mmh_img "
                                src={require("assets/images/demo/menu/home-10.jpg")}
                              />{" "}
                              <a href="index-10.html">
                                <span className="menu-text">Craftin House</span>
                              </a>
                            </li>
                            <li>
                              {" "}
                              <img
                                className="mmh_img "
                                src={require("assets/images/demo/menu/home-11.jpg")}
                              />{" "}
                              <a href="index-11.html">
                                <span className="menu-text">
                                  Craftswork Biz
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/#" className="menu-banner">
                            <img
                              src={require("assets/images/banner/menu-banner-1.jpg")}
                              alt="Home Menu Banner"
                            />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="/#">
                        <span className="menu-text">Shop</span>
                      </a>
                      <ul className="sub-menu mega-menu">
                        <li>
                          <a href="/#" className="mega-menu-title">
                            <span className="menu-text">SHOP PAGES</span>
                          </a>
                          <ul>
                            <li>
                              <a href="shop.html">
                                <span className="menu-text">
                                  Shop No Sidebar
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-left-sidebar.html">
                                <span className="menu-text">
                                  Shop Left Sidebar
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                <span className="menu-text">
                                  Shop Right Sidebar
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-no-gutters.html">
                                <span className="menu-text">
                                  Shop Fullwidth No Space
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth.html">
                                <span className="menu-text">
                                  Shop Fullwidth No Sidebar
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-left-sidebar.html">
                                <span className="menu-text">
                                  Shop Fullwidth Left Sidebar
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-right-sidebar.html">
                                <span className="menu-text">
                                  Shop Fullwidth Right Sidebar
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/#" className="mega-menu-title">
                            <span className="menu-text">PRODUCT PAGES</span>
                          </a>
                          <ul>
                            <li>
                              <a href="product-details.html">
                                <span className="menu-text">Basic</span>
                              </a>
                            </li>
                            <li>
                              <a href="product-details-fullwidth.html">
                                <span className="menu-text">Fullwidth</span>
                              </a>
                            </li>
                            <li>
                              <a href="product-details-sticky.html">
                                <span className="menu-text">
                                  Sticky Details
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="product-details-sidebar.html">
                                <span className="menu-text">Width Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="product-details-extra-content.html">
                                <span className="menu-text">Extra Content</span>
                              </a>
                            </li>
                            <li>
                              <a href="product-details-image-variation.html">
                                <span className="menu-text">
                                  Variations Images
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="product-details-group.html">
                                <span className="menu-text">
                                  Bought Together
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="product-details-360.html">
                                <span className="menu-text">Product 360</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/#" className="mega-menu-title">
                            <span className="menu-text">
                              PRODUCT & Other PAGES
                            </span>
                          </a>
                          <ul>
                            <li>
                              <a href="product-details-background.html">
                                <span className="menu-text">
                                  Product with Background
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="shopping-cart.html">
                                <span className="menu-text">Shopping Cart</span>
                              </a>
                            </li>
                            <li>
                              <a href="checkout.html">
                                <span className="menu-text">Checkout</span>
                              </a>
                            </li>
                            <li>
                              <a href="order-tracking.html">
                                <span className="menu-text">
                                  Order Tracking
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="wishlist.html">
                                <span className="menu-text">Wishlist</span>
                              </a>
                            </li>
                            <li>
                              <a href="login-register.html">
                                <span className="menu-text">
                                  Customer Login
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="my-account.html">
                                <span className="menu-text">My Account</span>
                              </a>
                            </li>
                            <li>
                              <a href="lost-password.html">
                                <span className="menu-text">Lost Password</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="align-self-center">
                          <a href="/#" className="menu-banner">
                            <img
                              src={require("assets/images/banner/menu-banner-2.png")}
                              alt="Shop Menu Banner"
                            />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="/#">
                        <span className="menu-text">Project</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="portfolio-3-columns.html">
                            <span className="menu-text">
                              Portfolio 3 Columns
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="portfolio-4-columns.html">
                            <span className="menu-text">
                              Portfolio 4 Columns
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="portfolio-5-columns.html">
                            <span className="menu-text">
                              Portfolio 5 Columns
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="portfolio-details.html">
                            <span className="menu-text">Portfolio Details</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="/#">
                        <span className="menu-text">Elements</span>
                      </a>
                      <ul className="sub-menu mega-menu">
                        <li>
                          <a href="/#" className="mega-menu-title">
                            <span className="menu-text">Column One</span>
                          </a>
                          <ul>
                            <li>
                              <a href="elements-products.html">
                                <span className="menu-text">
                                  Product Styles
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="elements-products-tabs.html">
                                <span className="menu-text">Product Tabs</span>
                              </a>
                            </li>
                            <li>
                              <a href="elements-product-sale-banner.html">
                                <span className="menu-text">
                                  Product & Sale Banner
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/#" className="mega-menu-title">
                            <span className="menu-text">Column Two</span>
                          </a>
                          <ul>
                            <li>
                              <a href="elements-category-banner.html">
                                <span className="menu-text">
                                  Category Banner
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="elements-team.html">
                                <span className="menu-text">Team Member</span>
                              </a>
                            </li>
                            <li>
                              <a href="elements-testimonials.html">
                                <span className="menu-text">Testimonials</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/#" className="mega-menu-title">
                            <span className="menu-text">Column Three</span>
                          </a>
                          <ul>
                            <li>
                              <a href="elements-instagram.html">
                                <span className="menu-text">Instagram</span>
                              </a>
                            </li>
                            <li>
                              <a href="elements-map.html">
                                <span className="menu-text">Google Map</span>
                              </a>
                            </li>
                            <li>
                              <a href="elements-icon-box.html">
                                <span className="menu-text">Icon Box</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/#" className="mega-menu-title">
                            <span className="menu-text">Column Four</span>
                          </a>
                          <ul>
                            <li>
                              <a href="elements-buttons.html">
                                <span className="menu-text">Buttons</span>
                              </a>
                            </li>
                            <li>
                              <a href="elements-faq.html">
                                <span className="menu-text">
                                  FAQs / Toggles
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="elements-brands.html">
                                <span className="menu-text">Brands</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="/#">
                        <span className="menu-text">Blog</span>
                      </a>
                      <ul className="sub-menu">
                        <li className="has-children">
                          <a href="blog-right-sidebar.html">
                            <span className="menu-text">Standard Layout</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog-right-sidebar.html">
                                <span className="menu-text">Right Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="blog-left-sidebar.html">
                                <span className="menu-text">Left Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="blog-fullwidth.html">
                                <span className="menu-text">Full Width</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children">
                          <a href="blog-grid-right-sidebar.html">
                            <span className="menu-text">Grid Layout</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog-grid-right-sidebar.html">
                                <span className="menu-text">Right Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="blog-grid-left-sidebar.html">
                                <span className="menu-text">Left Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="blog-grid-fullwidth.html">
                                <span className="menu-text">Full Width</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children">
                          <a href="blog-list-right-sidebar.html">
                            <span className="menu-text">List Layout</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog-list-right-sidebar.html">
                                <span className="menu-text">Right Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="blog-list-left-sidebar.html">
                                <span className="menu-text">Left Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="blog-list-fullwidth.html">
                                <span className="menu-text">Full Width</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children">
                          <a href="blog-masonry-right-sidebar.html">
                            <span className="menu-text">Masonry Layout</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog-masonry-right-sidebar.html">
                                <span className="menu-text">Right Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-left-sidebar.html">
                                <span className="menu-text">Left Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-fullwidth.html">
                                <span className="menu-text">Full Width</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children">
                          <a href="blog-details-right-sidebar.html">
                            <span className="menu-text">
                              Single Post Layout
                            </span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog-details-right-sidebar.html">
                                <span className="menu-text">Right Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="blog-details-left-sidebar.html">
                                <span className="menu-text">Left Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="blog-details-fullwidth.html">
                                <span className="menu-text">Full Width</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="/#">
                        <span className="menu-text">Pages</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="about-us.html">
                            <span className="menu-text">About us</span>
                          </a>
                        </li>
                        <li>
                          <a href="about-us-2.html">
                            <span className="menu-text">About us 02</span>
                          </a>
                        </li>
                        <li>
                          <a href="contact-us.html">
                            <span className="menu-text">Contact us</span>
                          </a>
                        </li>
                        <li>
                          <a href="coming-soon.html">
                            <span className="menu-text">Coming Soon</span>
                          </a>
                        </li>
                        <li>
                          <a href="404.html">
                            <span className="menu-text">Page 404</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Search End */}
              {/* Header Tools Start */}
              <div className="col-auto">
                <div className="header-tools justify-content-end">
                  <div className="header-login">
                    <a href="my-account.html">
                      <i className="fal fa-user"></i>
                    </a>
                  </div>
                  <div className="header-search d-none d-sm-block">
                    <a href="/#offcanvas-search" className="offcanvas-toggle">
                      <i className="fal fa-search"></i>
                    </a>
                  </div>
                  <div className="header-wishlist">
                    <a href="/#offcanvas-wishlist" className="offcanvas-toggle">
                      <span className="wishlist-count">3</span>
                      <i className="fal fa-heart"></i>
                    </a>
                  </div>
                  <div className="header-cart">
                    <a href="/#offcanvas-cart" className="offcanvas-toggle">
                      <span className="cart-count">3</span>
                      <i className="fal fa-shopping-cart"></i>
                    </a>
                  </div>
                  <div className="mobile-menu-toggle d-xl-none">
                    <a
                      href="/#offcanvas-mobile-menu"
                      className="offcanvas-toggle"
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        ></path>
                        <path d="M300,320 L540,320" id="middle"></path>
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* Header Tools End */}
            </Row>
          </Container>
        </div>
        {/* Header Sticky Section End */}
        {/* Mobile Header Section Start */}
        <div className="mobile-header bg-white section d-xl-none">
          <Container>
            <Row className="align-items-center">
              {/* Header Logo Start */}
              <Col>
                <div className="header-logo">
                  <a href="index.html">
                    <img
                      src={require("assets/images/logo/logo-2.png")}
                      alt="Learts Logo"
                    />
                  </a>
                </div>
              </Col>
              {/* Header Logo End */}
              {/* Header Tools Start */}
              <div className="col-auto">
                <div className="header-tools justify-content-end">
                  <div className="header-login d-none d-sm-block">
                    <a href="my-account.html">
                      <i className="fal fa-user"></i>
                    </a>
                  </div>
                  <div className="header-search d-none d-sm-block">
                    <a href="/#offcanvas-search" className="offcanvas-toggle">
                      <i className="fal fa-search"></i>
                    </a>
                  </div>
                  <div className="header-wishlist d-none d-sm-block">
                    <a href="/#offcanvas-wishlist" className="offcanvas-toggle">
                      <span className="wishlist-count">3</span>
                      <i className="fal fa-heart"></i>
                    </a>
                  </div>
                  <div className="header-cart">
                    <a href="/#offcanvas-cart" className="offcanvas-toggle">
                      <span className="cart-count">3</span>
                      <i className="fal fa-shopping-cart"></i>
                    </a>
                  </div>
                  <div className="mobile-menu-toggle">
                    <a
                      href="/#offcanvas-mobile-menu"
                      className="offcanvas-toggle"
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        ></path>
                        <path d="M300,320 L540,320" id="middle"></path>
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* Header Tools End */}
            </Row>
          </Container>
        </div>
        {/* Mobile Header Section End */}
        {/* Mobile Header Section Start */}
        <div className="mobile-header sticky-header bg-white section d-xl-none">
          <Container>
            <Row className="align-items-center">
              {/* Header Logo Start */}
              <Col>
                <div className="header-logo">
                  <a href="index.html">
                    <img
                      src={require("assets/images/logo/logo-2.png")}
                      alt="Learts Logo"
                    />
                  </a>
                </div>
              </Col>
              {/* Header Logo End */}
              {/* Header Tools Start */}
              <div className="col-auto">
                <div className="header-tools justify-content-end">
                  <div className="header-login d-none d-sm-block">
                    <a href="my-account.html">
                      <i className="fal fa-user"></i>
                    </a>
                  </div>
                  <div className="header-search d-none d-sm-block">
                    <a href="/#offcanvas-search" className="offcanvas-toggle">
                      <i className="fal fa-search"></i>
                    </a>
                  </div>
                  <div className="header-wishlist d-none d-sm-block">
                    <a href="/#offcanvas-wishlist" className="offcanvas-toggle">
                      <span className="wishlist-count">3</span>
                      <i className="fal fa-heart"></i>
                    </a>
                  </div>
                  <div className="header-cart">
                    <a href="/#offcanvas-cart" className="offcanvas-toggle">
                      <span className="cart-count">3</span>
                      <i className="fal fa-shopping-cart"></i>
                    </a>
                  </div>
                  <div className="mobile-menu-toggle">
                    <a
                      href="/#offcanvas-mobile-menu"
                      className="offcanvas-toggle"
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        ></path>
                        <path d="M300,320 L540,320" id="middle"></path>
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* Header Tools End */}
            </Col>
          </Container>
        </div>
        {/* Mobile Header Section End */}
        {/* OffCanvas Search Start */}
        <div id="offcanvas-search" className="offcanvas offcanvas-search">
          <div className="inner">
            <div className="offcanvas-search-form">
              <button className="offcanvas-close">×</button>
              <form action="/#">
                <Row className="mb-n3">
                  <div className="col-lg-8 col-12 mb-3">
                    <input type="text" placeholder="Search Products..." />
                  </div>
                  <div className="col-lg-4 col-12 mb-3">
                    <select className="search-select select2-basic">
                      <option value="0">All Categories</option>
                      <option value="kids-babies">Kids &amp; Babies</option>
                      <option value="home-decor">Home Decor</option>
                      <option value="gift-ideas">Gift ideas</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="toys">Toys</option>
                      <option value="kniting-sewing">
                        Kniting &amp; Sewing
                      </option>
                      <option value="pots">Pots</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <p className="search-description text-body-light mt-2">
              {" "}
              <span>/# Type at least 1 character to search</span>{" "}
              <span>/# Hit enter to search or ESC to close</span>
            </p>
          </div>
        </div>
        {/* OffCanvas Search End */}
        {/* OffCanvas Wishlist Start */}
        <div id="offcanvas-wishlist" className="offcanvas offcanvas-wishlist">
          <div className="inner">
            <div className="head">
              <span className="title">Wishlist</span>
              <button className="offcanvas-close">×</button>
            </div>
            <div className="body customScroll">
              <ul className="minicart-product-list">
                <li>
                  <a href="product-details.html" className="image">
                    <img
                      src={require("assets/images/product/cart-product-1.jpg")}
                      alt="Cart product Image"
                    />
                  </a>
                  <div className="content">
                    <a href="product-details.html" className="title">
                      Walnut Cutting Board
                    </a>
                    <span className="quantity-price">
                      1 x <span className="amount">$100.00</span>
                    </span>
                    <a href="/#" className="remove">
                      ×
                    </a>
                  </div>
                </li>
                <li>
                  <a href="product-details.html" className="image">
                    <img
                      src={require("assets/images/product/cart-product-2.jpg")}
                      alt="Cart product Image"
                    />
                  </a>
                  <div className="content">
                    <a href="product-details.html" className="title">
                      Lucky Wooden Elephant
                    </a>
                    <span className="quantity-price">
                      1 x <span className="amount">$35.00</span>
                    </span>
                    <a href="/#" className="remove">
                      ×
                    </a>
                  </div>
                </li>
                <li>
                  <a href="product-details.html" className="image">
                    <img
                      src={require("assets/images/product/cart-product-3.jpg")}
                      alt="Cart product Image"
                    />
                  </a>
                  <div className="content">
                    <a href="product-details.html" className="title">
                      Fish Cut Out Set
                    </a>
                    <span className="quantity-price">
                      1 x <span className="amount">$9.00</span>
                    </span>
                    <a href="/#" className="remove">
                      ×
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="foot">
              <div className="buttons">
                <a
                  href="wishlist.html"
                  className="btn btn-dark btn-hover-primary"
                >
                  view wishlist
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* OffCanvas Wishlist End */}
        {/* OffCanvas Cart Start */}
        <div id="offcanvas-cart" className="offcanvas offcanvas-cart">
          <div className="inner">
            <div className="head">
              <span className="title">Cart</span>
              <button className="offcanvas-close">×</button>
            </div>
            <div className="body customScroll">
              <ul className="minicart-product-list">
                <li>
                  <a href="product-details.html" className="image">
                    <img
                      src={require("assets/images/product/cart-product-1.jpg")}
                      alt="Cart product Image"
                    />
                  </a>
                  <div className="content">
                    <a href="product-details.html" className="title">
                      Walnut Cutting Board
                    </a>
                    <span className="quantity-price">
                      1 x <span className="amount">$100.00</span>
                    </span>
                    <a href="/#" className="remove">
                      ×
                    </a>
                  </div>
                </li>
                <li>
                  <a href="product-details.html" className="image">
                    <img
                      src={require("assets/images/product/cart-product-2.jpg")}
                      alt="Cart product Image"
                    />
                  </a>
                  <div className="content">
                    <a href="product-details.html" className="title">
                      Lucky Wooden Elephant
                    </a>
                    <span className="quantity-price">
                      1 x <span className="amount">$35.00</span>
                    </span>
                    <a href="/#" className="remove">
                      ×
                    </a>
                  </div>
                </li>
                <li>
                  <a href="product-details.html" className="image">
                    <img
                      src={require("assets/images/product/cart-product-3.jpg")}
                      alt="Cart product Image"
                    />
                  </a>
                  <div className="content">
                    <a href="product-details.html" className="title">
                      Fish Cut Out Set
                    </a>
                    <span className="quantity-price">
                      1 x <span className="amount">$9.00</span>
                    </span>
                    <a href="/#" className="remove">
                      ×
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="foot">
              <div className="sub-total">
                <strong>Subtotal :</strong>
                <span className="amount">$144.00</span>
              </div>
              <div className="buttons">
                <a
                  href="shopping-cart.html"
                  className="btn btn-dark btn-hover-primary"
                >
                  view cart
                </a>
                <a href="checkout.html" className="btn btn-outline-dark">
                  checkout
                </a>
              </div>
              <p className="minicart-message">
                Free Shipping on All Orders Over $100!
              </p>
            </div>
          </div>
        </div>
        {/* OffCanvas Cart End */}
        {/* OffCanvas Search Start */}
        <div
          id="offcanvas-mobile-menu"
          className="offcanvas offcanvas-mobile-menu"
        >
          <div className="inner customScroll">
            <div className="offcanvas-menu-search-form">
              <form action="/#">
                <input type="text" placeholder="Search..." />
                <button>
                  <i className="fal fa-search"></i>
                </button>
              </form>
            </div>
            <div className="offcanvas-menu">
              <ul>
                <li>
                  <a href="/#">
                    <span className="menu-text">Home</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/#">
                        <span className="menu-text">Home Group</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">
                            <span className="menu-text">Arts Propelled</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-2.html">
                            <span className="menu-text">Decor Thriving</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-3.html">
                            <span className="menu-text">Savvy Delight</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-4.html">
                            <span className="menu-text">Perfect Escapes</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="menu-text">Home Group</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index-5.html">
                            <span className="menu-text">Kitchen Cozy</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-6.html">
                            <span className="menu-text">Dreamy Designs</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-7.html">
                            <span className="menu-text">Crispy Recipes</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-8.html">
                            <span className="menu-text">Decoholic Chic</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="menu-text">Home Group</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index-9.html">
                            <span className="menu-text">Reblended Dish</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-10.html">
                            <span className="menu-text">Craftin House</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-11.html">
                            <span className="menu-text">Craftswork Biz</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#">
                    <span className="menu-text">Shop</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/#">
                        <span className="menu-text">Shop Pages</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="shop.html">
                            <span className="menu-text">Shop No Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-left-sidebar.html">
                            <span className="menu-text">Shop Left Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-right-sidebar.html">
                            <span className="menu-text">
                              Shop Right Sidebar
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-no-gutters.html">
                            <span className="menu-text">
                              Shop Fullwidth No Space
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth.html">
                            <span className="menu-text">
                              Shop Fullwidth No Sidebar
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-left-sidebar.html">
                            <span className="menu-text">
                              Shop Fullwidth Left Sidebar
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-right-sidebar.html">
                            <span className="menu-text">
                              Shop Fullwidth Right Sidebar
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="menu-text">Product Pages</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="product-details.html">
                            <span className="menu-text">Basic</span>
                          </a>
                        </li>
                        <li>
                          <a href="product-details-fullwidth.html">
                            <span className="menu-text">Fullwidth</span>
                          </a>
                        </li>
                        <li>
                          <a href="product-details-sticky.html">
                            <span className="menu-text">Sticky Details</span>
                          </a>
                        </li>
                        <li>
                          <a href="product-details-sidebar.html">
                            <span className="menu-text">Width Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href="product-details-extra-content.html">
                            <span className="menu-text">Extra Content</span>
                          </a>
                        </li>
                        <li>
                          <a href="product-details-image-variation.html">
                            <span className="menu-text">Variations Images</span>
                          </a>
                        </li>
                        <li>
                          <a href="product-details-group.html">
                            <span className="menu-text">Bought Together</span>
                          </a>
                        </li>
                        <li>
                          <a href="product-details-360.html">
                            <span className="menu-text">Product 360</span>
                          </a>
                        </li>
                        <li>
                          <a href="product-details-background.html">
                            <span className="menu-text">
                              Product with Background
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#" className="mega-menu-title">
                        <span className="menu-text">PRODUCT & Other PAGES</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="shopping-cart.html">
                            <span className="menu-text">Shopping Cart</span>
                          </a>
                        </li>
                        <li>
                          <a href="checkout.html">
                            <span className="menu-text">Checkout</span>
                          </a>
                        </li>
                        <li>
                          <a href="order-tracking.html">
                            <span className="menu-text">Order Tracking</span>
                          </a>
                        </li>
                        <li>
                          <a href="wishlist.html">
                            <span className="menu-text">Wishlist</span>
                          </a>
                        </li>
                        <li>
                          <a href="login-register.html">
                            <span className="menu-text">Customer Login</span>
                          </a>
                        </li>
                        <li>
                          <a href="my-account.html">
                            <span className="menu-text">My Account</span>
                          </a>
                        </li>
                        <li>
                          <a href="lost-password.html">
                            <span className="menu-text">Lost Password</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#">
                    <span className="menu-text">Project</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="portfolio-3-columns.html">
                        <span className="menu-text">Portfolio 3 Columns</span>
                      </a>
                    </li>
                    <li>
                      <a href="portfolio-4-columns.html">
                        <span className="menu-text">Portfolio 4 Columns</span>
                      </a>
                    </li>
                    <li>
                      <a href="portfolio-5-columns.html">
                        <span className="menu-text">Portfolio 5 Columns</span>
                      </a>
                    </li>
                    <li>
                      <a href="portfolio-details.html">
                        <span className="menu-text">Portfolio Details</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#">
                    <span className="menu-text">Elements</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/#" className="mega-menu-title">
                        <span className="menu-text">Column One</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="elements-products.html">
                            <span className="menu-text">Product Styles</span>
                          </a>
                        </li>
                        <li>
                          <a href="elements-products-tabs.html">
                            <span className="menu-text">Product Tabs</span>
                          </a>
                        </li>
                        <li>
                          <a href="elements-product-sale-banner.html">
                            <span className="menu-text">
                              Product & Sale Banner
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#" className="mega-menu-title">
                        <span className="menu-text">Column Two</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="elements-category-banner.html">
                            <span className="menu-text">Category Banner</span>
                          </a>
                        </li>
                        <li>
                          <a href="elements-team.html">
                            <span className="menu-text">Team Member</span>
                          </a>
                        </li>
                        <li>
                          <a href="elements-testimonials.html">
                            <span className="menu-text">Testimonials</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#" className="mega-menu-title">
                        <span className="menu-text">Column Three</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="elements-instagram.html">
                            <span className="menu-text">Instagram</span>
                          </a>
                        </li>
                        <li>
                          <a href="elements-map.html">
                            <span className="menu-text">Google Map</span>
                          </a>
                        </li>
                        <li>
                          <a href="elements-icon-box.html">
                            <span className="menu-text">Icon Box</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#" className="mega-menu-title">
                        <span className="menu-text">Column Four</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="elements-buttons.html">
                            <span className="menu-text">Buttons</span>
                          </a>
                        </li>
                        <li>
                          <a href="elements-faq.html">
                            <span className="menu-text">FAQs / Toggles</span>
                          </a>
                        </li>
                        <li>
                          <a href="elements-brands.html">
                            <span className="menu-text">Brands</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#">
                    <span className="menu-text">Blog</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/#">
                        <span className="menu-text">Standard Layout</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-right-sidebar.html">
                            <span className="menu-text">Right Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">
                            <span className="menu-text">Left Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-fullwidth.html">
                            <span className="menu-text">Full Width</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="menu-text">Grid Layout</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-grid-right-sidebar.html">
                            <span className="menu-text">Right Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-grid-left-sidebar.html">
                            <span className="menu-text">Left Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-grid-fullwidth.html">
                            <span className="menu-text">Full Width</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="menu-text">List Layout</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-list-right-sidebar.html">
                            <span className="menu-text">Right Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-list-left-sidebar.html">
                            <span className="menu-text">Left Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-list-fullwidth.html">
                            <span className="menu-text">Full Width</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="menu-text">Masonry Layout</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-masonry-right-sidebar.html">
                            <span className="menu-text">Right Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-left-sidebar.html">
                            <span className="menu-text">Left Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-fullwidth.html">
                            <span className="menu-text">Full Width</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="menu-text">Single Post Layout</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-details-right-sidebar.html">
                            <span className="menu-text">Right Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-left-sidebar.html">
                            <span className="menu-text">Left Sidebar</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-fullwidth.html">
                            <span className="menu-text">Full Width</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#">
                    <span className="menu-text">Pages</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="about-us.html">
                        <span className="menu-text">About us</span>
                      </a>
                    </li>
                    <li>
                      <a href="about-us-2.html">
                        <span className="menu-text">About us 02</span>
                      </a>
                    </li>
                    <li>
                      <a href="contact-us.html">
                        <span className="menu-text">Contact us</span>
                      </a>
                    </li>
                    <li>
                      <a href="coming-soon.html">
                        <span className="menu-text">Coming Soon</span>
                      </a>
                    </li>
                    <li>
                      <a href="404.html">
                        <span className="menu-text">Page 404</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="offcanvas-buttons">
              <div className="header-tools">
                <div className="header-login">
                  <a href="my-account.html">
                    <i className="fal fa-user"></i>
                  </a>
                </div>
                <div className="header-wishlist">
                  <a href="wishlist.html">
                    <span>3</span>
                    <i className="fal fa-heart"></i>
                  </a>
                </div>
                <div className="header-cart">
                  <a href="shopping-cart.html">
                    <span className="cart-count">3</span>
                    <i className="fal fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="offcanvas-social">
              <a href="/#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        {/* OffCanvas Search End */}
        <div className="offcanvas-overlay"></div>
        {/* Slider main container Start */}
        <div className="home1-slider swiper-container">
          <div className="swiper-wrapper">
            <div
              className="home1-slide-item swiper-slide"
              data-swiper-autoplay="5000"
              data-bg-image={require("assets/images/slider/home1/slide-1.jpg")}
            >
              <div className="home1-slide1-content">
                <span className="bg"></span>
                <span className="slide-border"></span>
                <span className="icon">
                  <img
                    src={require("assets/images/slider/home1/slide-1-1.png")}
                    alt="Slide Icon"
                  />
                </span>
                <h2 className="title">Handicraft Shop</h2>
                <h3 className="sub-title">Just for you</h3>
                <div className="link">
                  <a href="shop.html">shop now</a>
                </div>
              </div>
            </div>
            <div
              className="home1-slide-item swiper-slide"
              data-swiper-autoplay="5000"
              data-bg-image={require("assets/images/slider/home1/slide-2.jpg")}
            >
              <div className="home1-slide2-content">
                <span
                  className="bg"
                  data-bg-image={require("assets/images/slider/home1/slide-2-1.png")}
                ></span>
                <span className="slide-border"></span>
                <span className="icon">
                  <img
                    src={require("assets/images/slider/home1/slide-2-2.png")}
                    alt="Slide Icon"
                  />
                  <img
                    src={require("assets/images/slider/home1/slide-2-3.png")}
                    alt="Slide Icon"
                  />
                </span>
                <h2 className="title">Newly arrived</h2>
                <h3 className="sub-title">
                  Sale up to <br />
                  10%
                </h3>
                <div className="link">
                  <a href="shop.html">shop now</a>
                </div>
              </div>
            </div>
            <div
              className="home1-slide-item swiper-slide"
              data-swiper-autoplay="5000"
              data-bg-image={require("assets/images/slider/home1/slide-3.jpg")}
            >
              <div className="home1-slide3-content">
                <h2 className="title">Affectious gifts</h2>
                <h3 className="sub-title">
                  <img
                    className="left-icon "
                    src={require("assets/images/slider/home1/slide-2-2.png")}
                    alt="Slide Icon"
                  />
                  For friends & family
                  <img
                    className="right-icon "
                    src={require("assets/images/slider/home1/slide-2-3.png")}
                    alt="Slide Icon"
                  />
                </h3>
                <div className="link">
                  <a href="shop.html">shop now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="home1-slider-prev swiper-button-prev">
            <i className="ti-angle-left"></i>
          </div>
          <div className="home1-slider-next swiper-button-next">
            <i className="ti-angle-right"></i>
          </div>
        </div>
        {/* Slider main container End */}
        <SaleBanner />
        {/* Category Banner Section Start */}
        <div className="section section-fluid section-padding pt-0">
          <Container>
            <div className="category-banner1-carousel">
              <div className="col">
                <div className="category-banner1">
                  <div className="inner">
                    <a href="shop.html" className="image">
                      <img
                        src={require("assets/images/banner/category/banner-s1-1.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="content">
                      <h3 className="title">
                        <a href="shop.html">Gift ideas</a>
                        <span className="number">16</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="category-banner1">
                  <div className="inner">
                    <a href="shop.html" className="image">
                      <img
                        src={require("assets/images/banner/category/banner-s1-2.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="content">
                      <h3 className="title">
                        <a href="shop.html">Home Decor</a>
                        <span className="number">16</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="category-banner1">
                  <div className="inner">
                    <a href="shop.html" className="image">
                      <img
                        src={require("assets/images/banner/category/banner-s1-3.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="content">
                      <h3 className="title">
                        <a href="shop.html">Kids & Babies</a>
                        <span className="number">6</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="category-banner1">
                  <div className="inner">
                    <a href="shop.html" className="image">
                      <img
                        src={require("assets/images/banner/category/banner-s1-4.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="content">
                      <h3 className="title">
                        <a href="shop.html">Kitchen</a>
                        <span className="number">15</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="category-banner1">
                  <div className="inner">
                    <a href="shop.html" className="image">
                      <img
                        src={require("assets/images/banner/category/banner-s1-5.jpg")}
                        alt=""
                      />
                    </a>
                    <div className="content">
                      <h3 className="title">
                        <a href="shop.html">Kniting & Sewing</a>
                        <span className="number">4</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* Category Banner Section End */}
        <Products />
        <Footer />
        {/* Modal */}
        <div className="quickViewModal modal fade" id="quickViewModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <button className="close" data-dismiss="modal">
                &times;
              </button>
              <Row className="learts-mb-n30">
                {/* Product Images Start */}
                <div className="col-lg-6 col-12 learts-mb-30">
                  <div className="product-images">
                    <div className="product-gallery-slider-quickview">
                      <div
                        className="product-zoom"
                        data-image={require("assets/images/product/single/1/product-zoom-1.jpg")}
                      >
                        <img
                          src={require("assets/images/product/single/1/product-1.jpg")}
                          alt=""
                        />
                      </div>
                      <div
                        className="product-zoom"
                        data-image={require("assets/images/product/single/1/product-zoom-2.jpg")}
                      >
                        <img
                          src={require("assets/images/product/single/1/product-2.jpg")}
                          alt=""
                        />
                      </div>
                      <div
                        className="product-zoom"
                        data-image={require("assets/images/product/single/1/product-zoom-3.jpg")}
                      >
                        <img
                          src={require("assets/images/product/single/1/product-3.jpg")}
                          alt=""
                        />
                      </div>
                      <div
                        className="product-zoom"
                        data-image={require("assets/images/product/single/1/product-zoom-4.jpg")}
                      >
                        <img
                          src={require("assets/images/product/single/1/product-4.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product Images End */}
                {/* Product Summery Start */}
                <div className="col-lg-6 col-12 overflow-hidden learts-mb-30">
                  <div className="product-summery customScroll">
                    <div className="product-ratings">
                      <span className="star-rating">
                        <span className="rating-active" style="width: 100%;">
                          ratings
                        </span>
                      </span>
                      <a href="/#reviews" className="review-link">
                        (<span className="count">3</span> customer reviews)
                      </a>
                    </div>
                    <h3 className="product-title">Cleaning Dustpan & Brush</h3>
                    <div className="product-price">£38.00 – £50.00</div>
                    <div className="product-description">
                      <p>
                        Easy clip-on handle – Hold the brush and dustpan
                        together for storage; the dustpan edge is serrated to
                        allow easy scraping off the hair without entanglement.
                        High-quality bristles – no burr damage, no scratches,
                        thick and durable, comfortable to remove dust and
                        smaller particles.
                      </p>
                    </div>
                    <div className="product-variations">
                      <table>
                        <tbody>
                          <tr>
                            <td className="label">
                              <span>Size</span>
                            </td>
                            <td className="value">
                              <div className="product-sizes">
                                <a href="/#">Large</a>
                                <a href="/#">Medium</a>
                                <a href="/#">Small</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="label">
                              <span>Color</span>
                            </td>
                            <td className="value">
                              <div className="product-colors">
                                <a href="/#" data-bg-color="/#000000"></a>
                                <a href="/#" data-bg-color="/#ffffff"></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="label">
                              <span>Quantity</span>
                            </td>
                            <td className="value">
                              <div className="product-quantity">
                                <span className="qty-btn minus">
                                  <i className="ti-minus"></i>
                                </span>
                                <input
                                  type="text"
                                  className="input-qty"
                                  defaultValue="1"
                                />
                                <span className="qty-btn plus">
                                  <i className="ti-plus"></i>
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="product-buttons">
                      <a
                        href="/#"
                        className="btn btn-icon btn-outline-body btn-hover-dark"
                      >
                        <i className="fal fa-heart"></i>
                      </a>
                      <a
                        href="/#"
                        className="btn btn-dark btn-outline-hover-dark"
                      >
                        <i className="fal fa-shopping-cart"></i> Add to Cart
                      </a>
                      <a
                        href="/#"
                        className="btn btn-icon btn-outline-body btn-hover-dark"
                      >
                        <i className="fal fa-random"></i>
                      </a>
                    </div>
                    <div className="product-brands">
                      <span className="title">Brands</span>
                      <div className="brands">
                        <a href="/#">
                          <img
                            src={require("assets/images/brands/brand-3.png")}
                            alt=""
                          />
                        </a>
                        <a href="/#">
                          <img
                            src={require("assets/images/brands/brand-8.png")}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-meta mb-0">
                      <table>
                        <tbody>
                          <tr>
                            <td className="label">
                              <span>SKU</span>
                            </td>
                            <td className="value">0404019</td>
                          </tr>
                          <tr>
                            <td className="label">
                              <span>Category</span>
                            </td>
                            <td className="value">
                              <ul className="product-category">
                                <li>
                                  <a href="/#">Kitchen</a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td className="label">
                              <span>Tags</span>
                            </td>
                            <td className="value">
                              <ul className="product-tags">
                                <li>
                                  <a href="/#">handmade</a>
                                </li>
                                <li>
                                  <a href="/#">learts</a>
                                </li>
                                <li>
                                  <a href="/#">mug</a>
                                </li>
                                <li>
                                  <a href="/#">product</a>
                                </li>
                                <li>
                                  <a href="/#">learts</a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td className="label">
                              <span>Share on</span>
                            </td>
                            <td className="va">
                              <div className="product-share">
                                <a href="/#">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="/#">
                                  <i className="fab fa-twitter"></i>
                                </a>
                                <a href="/#">
                                  <i className="fab fa-google-plus-g"></i>
                                </a>
                                <a href="/#">
                                  <i className="fab fa-pinterest"></i>
                                </a>
                                <a href="/#">
                                  <i className="fal fa-envelope"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Product Summery End */}
              </Row>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LeartsBad;
