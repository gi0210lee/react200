import React, { Component } from "react";

function withHocComponent(InComponent, InComponentName) {
  return class OutCompont extends Component {
    componenthidUpdate() {
      console.log(`3 IncomponentName: ${InComponentName}`);
    }

    render() {
      console.log("1 InComopnent render");
      return <InComponent {...this.props} />;
    }
  };
}

export default withHocComponent;
