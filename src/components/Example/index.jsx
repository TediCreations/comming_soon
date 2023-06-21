import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  text: PropTypes.string,
  color: PropTypes.color,
  align: PropTypes.oneOf(["left", "center", "right"]),
};

const defaultProps = {
  text: "example",
  color: "#000000",
  align: "left",
};

class Example extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    this.text = props.text;
    this.color = props.color;
    this.align = props.align;
  }

  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: this.align }}>
          I am an example React Component!
        </h1>
        <p>
          My inputs are: <b>text</b> and{" "}
          <b style={{ color: this.color }}>color</b>.
        </p>
        <p>
          My text is: <i style={{ color: this.color }}>{this.text}</i>
        </p>
      </React.Fragment>
    );
  }
}

Example.propTypes = propTypes;
Example.defaultProps = defaultProps;

export default Example;
