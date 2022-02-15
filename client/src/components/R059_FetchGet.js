import React, { Component } from "react";

class FetchGet extends Component {
  constructor(props) {
    super(props);
  }

  componenthidMount = async () => {
    const response = await fetch("http://date.jsontest.com/");
    const body = await response.json;
    alert(body.date);
  };
  render() {
    return <div>fetch get</div>;
  }
}

export default FetchGet;
