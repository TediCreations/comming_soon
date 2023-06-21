import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  constructor() {
    super();
    this.menu = [
      { label: "Home", url: "/" },
      {
        label: "Shop",
        url: "/product",
        imagePath: require("assets/img/home/menu/menu.jpg"),
        submenu: [
          {
            label: "Material",
            url: "/product",
            menu: [
              { label: "Macrame", url: "/product?view=macrame" },
              { label: "Silver 925", url: "/product?view=silver925" },
              { label: "Brass", url: "/product?view=brass" },
            ],
          },
          {
            label: "Categories",
            url: "/product",
            menu: [
              { label: "Rings", url: "/product?view=rings" },
              { label: "Earrings", url: "/product?view=earrings" },
              { label: "Bracelets", url: "/product?view=bracelets" },
              { label: "Necklaces", url: "/product?view=necklaces" },
            ],
          },
        ],
      },
      { label: "About", url: "/about" },
      { label: "Contact", url: "/contact" },
      { label: "Test", url: "/test" },
    ];
  }

  getMenu(menu) {
    if (menu.submenu) {
      /* Menu with children start */
      return (
        <li className="has-children">
          <Link to={menu.url}>
            <span className="menu-text">
              {menu.label}
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </Link>
          <ul className="sub-menu mega-menu">
            {menu.submenu.map((submenu) => (
              <li key={submenu.id}>
                <Link to={submenu.url} className="mega-menu-title">
                  <span className="menu-text">{submenu.label}</span>
                </Link>
                <ul>
                  {submenu.menu.map((menu) => (
                    <li key={menu.id}>
                      <Link to={menu.url}>
                        <span className="menu-text">{menu.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="align-self-center">
              {/* <!-- 242x275 --> */}
              <Link to={menu.url} className="menu-banner">
                <img src={menu.imagePath} alt="Shop Menu Banner" />
              </Link>
            </li>
          </ul>
        </li>
      );
      /* Menu with children end */
    } else {
      /* Menu without children start */
      return (
        <li key={menu.id}>
          <Link to={menu.url}>
            <span className="menu-text">{menu.label}</span>
          </Link>
        </li>
      );
      /* Menu without children end */
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* Site Menu Section Start */}
        <div className="site-menu-section section">
          <Container>
            <nav className="site-main-menu justify-content-center">
              <ul>{this.menu.map((menu) => this.getMenu(menu))}</ul>
            </nav>
          </Container>
        </div>
        {/* Site Menu Section End */}
      </React.Fragment>
    );
  }
}

export default Menu;
