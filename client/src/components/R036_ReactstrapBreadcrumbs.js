import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";

class ReactstrapBreadcrumbs extends Component {
  render() {
    return (
      <div id="top">
        <span>top</span>
        <Breadcrumb tag="nav" listTag="div">
          <Breadcrumb.Item tag="a" href="#top">
            Go_top
          </Breadcrumb.Item>
          <Breadcrumb.Item tag="a" href="#bottom">
            Go_bottom
          </Breadcrumb.Item>
        </Breadcrumb>
        <div id="bottom" style={{ marginTop: "1000px" }}>
          <span>bottom</span>
        </div>
      </div>
    );
  }
}

export default ReactstrapBreadcrumbs;
