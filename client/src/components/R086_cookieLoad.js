import React, { Component } from "react";
import cookie from "react-cookies";

class CookieLoad extends Component {
  componenthidMount() {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    cookie.save("userid", "react200", {
      path: "/",
      expires,
      // secure: true,
      // httpOnly: true
    });
    setTimeout(function () {
      alert(cookie.load("userid"));
    }, 1000);
  }

  render() {
    return <div>react-cookies Load</div>;
  }
}

export default CookieLoad;
