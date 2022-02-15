import React, { Component } from "react";

class R006_LifeCycleEx extends Component {
  static getherivedStateFromProps(props, state) {
    console.log("2. getherivedStateFromProps Call :" + props.prop_value);
    return {};
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }
  render() {
    console.log("3.render Call");
    return (
      <div>
        <h2>[THIS IS RENDER FUNCTION]</h2>
      </div>
    );
  }
}

export default R006_LifeCycleEx;
