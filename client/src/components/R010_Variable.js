import React, { PureComponent } from "react";

class Variable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componenthidMount() {
    var varName = "react";
    console.log("varName1 : " + varName);
    var varName = "200";
    console.log("varName2 : " + varName);

    let letName = "react";
    console.log("letName1 : " + letName);
    // let letName = "200";
    letName = "react200";
    console.log("letName2 : " + letName);

    const constName = "react";
    console.log("constName : " + constName);
  }
  render() {
    return <h2>[THIS IS Variable]/</h2>;
  }
}

export default Variable;
