import React, { Component } from "react";

class R109_reactProxy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
  }
  componentDidMount = async () => {
    const response = await fetch("/users");
    const body = await response.text();
    this.setState({ body });
    // console.log("body : " + body);
  };
  render() {
    return (
      <div>
        Proxy Call Node Api
        <br /> {this.state.body}
      </div>
    );
  }
}

export default R109_reactProxy;
