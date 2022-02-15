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
    this.setState({ tmp_state2: true });
  }

  shouldComponentUpdate(props, state) {
    console.log(
      "6. shouldComponentUpdate Call / tmp_state2 = " + state.tmp_state2
    );
    return state.tmp_state2;
  }

  render() {
    console.log("3. render Call");
    return <h2>[THIS IS shouldComponentUpdate FUNCTION]</h2>;
  }
}

export default LifeCycleEx;
