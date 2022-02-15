import React, { Component } from "react";

class Props extends Component {
  render() {
    let props_value = this.props.props_value;
    props_value += " from App.js";
    return <div>{props_value}</div>;
  }
}

export default Props;
