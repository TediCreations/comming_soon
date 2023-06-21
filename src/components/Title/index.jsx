import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

const defaultProps = {
  title: "Title",
  subtitle: "",
};

class Title extends React.Component {
  constructor(props) {
    super();

    this.title = props.title;
    this.subtitle = props.subtitle;
  }

  render() {
    return (
      <React.Fragment>
        {/* Section Title Start */}
        <div className="section-title text-center">
          <h3 className="sub-title">{this.title}</h3>
          <h2 className="title title-icon-both">{this.subtitle}</h2>
        </div>
        {/* Section Title End */}
      </React.Fragment>
    );
  }
}

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
