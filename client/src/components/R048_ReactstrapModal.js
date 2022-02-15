import { Button } from "react-bootstrap";
import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class ReactstrapModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <>
        <Button variant="warning" onClick={this.toggle}>
          Modal 버튼
        </Button>
        <Modal show={this.state.modal} onHide={this.toggle}>
          <Modal.Header closeButton>Modal Header</Modal.Header>
          <Modal.Body>
            The generated lorem ipsum us therefore always free from repetition
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.toggle}>
              확인
            </Button>
            <Button variant="secondary" onClick={this.toggle}>
              닫기
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ReactstrapModal;
