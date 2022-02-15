import React, { PureComponent } from "react";
import { Alert, UncontrolledAlert } from "reactstrap";

class ReactstrapAlerts extends PureComponent {
  render() {
    return (
      <div>
        <Alert color="primary">Simple Alert [color: light]</Alert>
        <UncontrolledAlert color="warning">
          UncontrolledAlert [color:wraning]
        </UncontrolledAlert>
      </div>
    );
  }
}

export default ReactstrapAlerts;
