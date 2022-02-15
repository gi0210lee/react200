import React, { Component } from "react";

class R004_LifeCycle extends Component {
  render() {
    console.log("3.render call");
    return (
      <div>
        <h2>[THIS IS RENDER FUNCTION]</h2>
      </div>
    );
  }
}

export default R004_LifeCycle;
