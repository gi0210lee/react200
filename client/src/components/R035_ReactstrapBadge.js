import React, { Component } from "react";
import { Badge, Button } from "react-bootstrap";

class ReactstrapBadge extends Component {
  render() {
    return (
      <div>
        <h1>
          PRODUCT NAME <Badge bg="secondary">hit</Badge>
        </h1>
        <Button variant="outline-light">
          Accessor <Badge bg="dark">4</Badge>
        </Button>
        <Badge bg="danger" pill={true}>
          pill
        </Badge>
        <Badge href="http://example.com" bg="light" text="dark">
          GoLink
        </Badge>
      </div>
    );
  }
}

export default ReactstrapBadge;
