import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import Button from "components/Button";
import Accordion from "components/Accordion";
import ToggleButton from "@mui/material/ToggleButton";
import Slider from "@mui/material/Slider";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa3, fa4, fa5 } from "@fortawesome/free-solid-svg-icons";

const StyledDiv = styled.div`
  height: 210px;
  overflow-y: scroll;
`;

const ScrollableDiv = ({ children }) => <StyledDiv>{children}</StyledDiv>;

ScrollableDiv.propTypes = {
  children: PropTypes.node.isRequired,
};

// -----------

function ProductFilterSelection() {
  const options = [
    { filter: "menu_order", text: "Default sorting" },
    { filter: "popularity", text: "Sort by popularity" },
    { filter: "rating", text: "Sort by average rating" },
    { filter: "date", text: "Sort by latest" },
    { filter: "price", text: "Sort by price: low to high" },
    { filter: "price-desc", text: "Sort by price: high to low" },
  ];

  const [activeFilter, setActiveFilter] = useState(options[0].filter);

  const handleChange = (e) => {
    setActiveFilter(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="product-sorting">
        <select className="nice-select" onChange={handleChange}>
          {options.map((option) => (
            <option
              key={option.filter}
              selected={activeFilter === option.filter ? "selected" : ""}
              value={option.filter}
            >
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
}

function ProductLayoutSelection() {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <React.Fragment>
      <div className="product-column-toggle d-none d-xl-flex">
        <ToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="3" aria-label="3 column">
            <FontAwesomeIcon icon={fa3} />
          </ToggleButton>
          <ToggleButton value="4" aria-label="4 column">
            <FontAwesomeIcon icon={fa4} />
          </ToggleButton>
          <ToggleButton value="5" aria-label="5 column">
            <FontAwesomeIcon icon={fa5} />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </React.Fragment>
  );
}

const IsotopFilter = () => {
  const options = [
    { filter: "all", text: "All" },
    { filter: "featured", text: "Hot Products" },
    { filter: "new", text: "New Products" },
    { filter: "sales", text: "Sales Products" },
  ];
  const [activeFilter, setActiveFilter] = useState(options[0].filter);

  const handleFilterClick = (e) => {
    setActiveFilter(e.target.dataset.filter);
  };

  return (
    <React.Fragment>
      <div className="isotope-filter shop-product-filter">
        {options.map((option) => (
          <button
            key={option.filter}
            className={activeFilter === option.filter ? "active" : ""}
            data-filter={option.filter}
            onClick={handleFilterClick}
          >
            {option.text}
          </button>
        ))}
      </div>
    </React.Fragment>
  );
};

//-----------------------------------------

const SortFilter = () => {
  return (
    <React.Fragment>
      <h3 className="widget-title product-filter-widget-title">Sort by</h3>
      <ScrollableDiv>
        <ul className="widget-list product-filter-widget">
          <li>
            <a href="#">Popularity</a>
          </li>
          <li>
            <a href="#">Average rating</a>
          </li>
          <li>
            <a href="#">Newness</a>
          </li>
          <li>
            <a href="#">Price: low to high</a>
          </li>
          <li>
            <a href="#">Price: high to low</a>
          </li>
        </ul>
      </ScrollableDiv>
    </React.Fragment>
  );
};

const PriceFilter = () => {
  const minDistance = 10;
  const maxValue = 500;
  const [value, setValue] = useState([0, maxValue]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], maxValue - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }
  };

  function valuetext(value) {
    return <>{value} °C</>;
  }
  return (
    <React.Fragment>
      <h3 className="widget-title product-filter-widget-title">Price filter</h3>
      <Slider
        min={0}
        max={maxValue}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        disableSwap
      />
    </React.Fragment>
  );
};

const CategoriesFilter = () => {
  const options = [
    { name: "Bracelet", url: "#", count: 16 },
    { name: "Macrame", url: "#", count: 4 },
    { name: "Ring", url: "#", count: 7 },
    { name: "Metal", url: "#", count: 13 },
    { name: "Necklace", url: "#", count: 2 },
    { name: "Earrings", url: "#", count: 15 },
    { name: "Wood", url: "#", count: 7 },
  ];

  return (
    <React.Fragment>
      <h3 className="widget-title product-filter-widget-title">Categories</h3>
      <ScrollableDiv>
        <ul className="widget-list product-filter-widget">
          {options.map((option) => (
            <li key={option.name}>
              <a href={option.url}>{option.name}</a>
              <span className="count_v2">({option.count})</span>
            </li>
          ))}
        </ul>
      </ScrollableDiv>
    </React.Fragment>
  );
};

const ColorFilter = () => {
  const options = [
    { name: "Black", url: "#", code: "#000000" },
    { name: "White", url: "#", code: "#FFFFFF" },
    { name: "Dark Red", url: "#", code: "#b2483c" },
    { name: "Flaxen", url: "#", code: "#d5b85a" },
    { name: "Pine", url: "#", code: "#01796f" },
    { name: "Tortilla", url: "#", code: "#997950" },
  ];

  return (
    <React.Fragment>
      <h3 className="widget-title product-filter-widget-title">
        Filters by colors
      </h3>
      <ul className="widget-colors product-filter-widget">
        {options.map((option) => (
          <li key={option.name}>
            <a href={option.url} className="hintT-top" data-hint={option.name}>
              <span data-bg-color={option.code}>{option.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const BrandFilter = () => {
  const options = [
    { name: "Alexander", url: "#", count: 2 },
    { name: "Carmella", url: "#", count: 4 },
    { name: "Danielle", url: "#", count: 7 },
    { name: "Diana Day", url: "#", count: 13 },
    { name: "Emilia", url: "#", count: 2 },
    { name: "Gasmine", url: "#", count: 15 },
    { name: "Jack & Ella", url: "#", count: 7 },
    { name: "Juliette", url: "#", count: 11 },
  ];

  return (
    <div className="product-filter-widget">
      <h3 className="widget-title product-filter-widget-title">Brands</h3>
      <ScrollableDiv>
        <ul className="widget-list">
          {options.map((option) => (
            <li key={option.name}>
              <a href={option.url}>{option.name}</a>
              <span className="count_v2">({option.count})</span>
            </li>
          ))}
        </ul>
      </ScrollableDiv>
    </div>
  );
};

//-----------------------------------------

const ProductFilterBar = () => {
  const [isFilterVisible, setVisibleFilter] = useState(false);
  const handleClick = () => {
    setVisibleFilter((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      {/* Shop Products Section Start */}
      <div className="section section-padding pt-0">
        <div className="shop-toolbar section-fluid border-bottom">
          <div className="container">
            <div className="row learts-mb-n20">
              <div className="col-md col-12 align-self-center learts-mb-20">
                <IsotopFilter />
              </div>

              <div className="col-md-auto col-12 learts-mb-20">
                <ul className="shop-toolbar-controls">
                  <li>
                    <ProductFilterSelection />
                  </li>
                  <li>
                    <ProductLayoutSelection />
                  </li>
                  <li>
                    <Button label="Filters" onClick={handleClick} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Accordion isOpen={isFilterVisible}>
          <div className="product-filter_v2 section-fluid bg-light">
            <div className="container">
              <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 learts-mb-n30">
                <div className="col learts-mb-30">
                  <SortFilter />
                </div>
                <div className="col learts-mb-30">
                  <PriceFilter />
                </div>
                <div className="col learts-mb-30">
                  <CategoriesFilter />
                </div>
                <div className="col learts-mb-30">
                  <ColorFilter />
                </div>
                <div className="col learts-mb-30">
                  <BrandFilter />
                </div>
              </div>
            </div>
          </div>
        </Accordion>
      </div>
      {/* Shop Products Section End */}
    </React.Fragment>
  );
};

export default ProductFilterBar;
