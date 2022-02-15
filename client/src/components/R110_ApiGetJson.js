import React, { Component } from "react";

class R110_ApiGetJson extends Component {
  componentDidMount = async () => {
    const response = await fetch("/users");
    const body = await response.json();
    console.log(body.message);
  };
  render() {
    return (
      <div>
        <h1>Call Node Api Get</h1>
      </div>
    );
  }
}

export default R110_ApiGetJson;
