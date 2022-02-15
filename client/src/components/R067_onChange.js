import React, { Component } from "react";

class onChange extends Component {
  change = (e) => {
    var val = e.target.value;
    console.log("param : " + val);
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.change} />
        <select onChange={this.change}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </div>
    );
  }
}

export default onChange;
