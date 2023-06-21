import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "@mui/material";

const propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  isOpen: false,
  children: "",
};

class Accordion extends React.Component {
  constructor(props) {
    super();
    this.children = props.children;
    this.state = {
      isOpen: props.isOpen,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setState({ isOpen: this.props.isOpen });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Collapse in={this.state.isOpen}>{this.children}</Collapse>
      </React.Fragment>
    );
  }
}

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;
