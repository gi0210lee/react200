import React, { Component } from "react";

class LifeCycleEx extends Component {
  static getherivedStateFromProps(props, state) {
    console.log("2. getherivedStateFromProps Call :" + props.prop_value);
    return { tmp_state: props.prop_value };
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }

  componenthidMount() {
    console.log("4. componenthidMount Call");
    console.log("5. tmp_state : " + this.state.tmp_state);
  }

  render() {
    console.log("3. render Call");
    return (
      <div>
        <h2>[THIS IS RENDER FUNCTION]</h2>
      </div>
    );
  }
}

export default LifeCycleEx;
