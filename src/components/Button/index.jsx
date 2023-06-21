import React from "react";
import PropTypes from "prop-types";
import { Button as MuiButton } from "@mui/material";

const propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  label: "Click me!",
  onClick: null,
};

class Button extends React.Component {
  constructor(props) {
    super();
    this.label = props.label;
    this.onClick = props.onClick;
  }

  render() {
    return (
      <MuiButton onClick={this.onClick} variant="contained">
        {this.label}
      </MuiButton>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
