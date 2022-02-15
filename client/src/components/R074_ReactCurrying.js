import React, { Component } from "react";

class ReactCurrying extends Component {
  plusNumOrString(c, d) {
    return c + d;
  }
  plusFunc1(a) {
    return function (b) {
      return this.plusNumOrString(a, b);
    }.bind(this);
  }

  PlusFunc2 = (a) => (b) => this.plusNumOrStrng(a, b);

  PlusFunc(a) {
    return this.plusFunc1(a)(200);
  }

  render() {
    return (
      <div>
        <input
          type="button"
          value="NumberPlus"
          onClick={(e) => alert(this.PlusFunc(100))}
        ></input>
        <input
          type="button"
          value="StringPlus"
          onClick={(e) => alert(this.PlusFunc("react"))}
        ></input>
      </div>
    );
  }
}

export default ReactCurrying;
