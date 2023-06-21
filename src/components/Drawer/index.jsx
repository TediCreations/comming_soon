import React from "react";
import PropTypes from "prop-types";
import { Drawer as MuiDrawer } from "@mui/material";

const propTypes = {
  children: PropTypes.node.isRequired,
  fromPixel: PropTypes.number,
  anchor: PropTypes.oneOf(["top", "right", "left", "bottom"]),
};

const defaultProps = {
  children: "",
  fromPixel: 0,
  anchor: "top",
};

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.children = this.props.children;
    this.fromPixel = this.props.fromPixel;
    this.anchor = this.props.anchor;
    this.state = {
      scrollY: 0,
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll() {
    this.setState({ scrollY: window.scrollY || window.pageYOffset });
  }

  render() {
    const isExpanded = this.state.scrollY > this.fromPixel;
    return (
      <React.Fragment>
        <MuiDrawer variant="persistent" anchor={this.anchor} open={isExpanded}>
          {this.children}
        </MuiDrawer>
      </React.Fragment>
    );
  }
}

Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;

export default Drawer;
