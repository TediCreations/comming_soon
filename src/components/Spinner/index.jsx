import React from "react";
import PropTypes from "prop-types";
import { SpinnerDotted } from "spinners-react";

const propTypes = {
  color: PropTypes.color,
  size: PropTypes.number,
};

const defaultProps = {
  color: "#72A499",
  size: 50,
};

class Spinner extends React.Component {
  constructor(props) {
    super();
    this.color = props.color;
    this.size = props.size;
    this.thickness = 100;
    this.speed = 100;
    this.secondaryColor = "rgba(0, 0, 0, 0.44)";
  }

  render() {
    return (
      <React.Fragment>
        <SpinnerDotted
          size={this.size}
          thickness={this.thickness}
          speed={this.speed}
          color={this.color}
          secondaryColor={this.secondaryColor}
        />
      </React.Fragment>
    );
  }
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
