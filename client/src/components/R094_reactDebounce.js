import { debounce } from "lodash";
import React, { Component } from "react";

class R094_reacthebounce extends Component {
  debounceFunc = debounce(() => {
    console.log("Debounce API Call");
  }, 1000);
  render() {
    return (
      <>
        <h2>검색어 입력</h2>
        <input type="text" onChange={this.debounceFunc} />
      </>
    );
  }
}

export default R094_reacthebounce;
