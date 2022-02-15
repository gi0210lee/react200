import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

class ReactstrapDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  render() {
    return (
      <div>
        <Dropdown autoClose={this.state.dropdownOpen} toggle={this.toggle}>
          <Dropdown.Toggle caret>버튼</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item header>헤더</Dropdown.Item>
            <Dropdown.Item disabled>비활성화 버튼</Dropdown.Item>
            <Dropdown.Item href="http://example.com/">
              example.com 웹 사이트로 이동
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => alert("Alert 버튼")}>
              Alert 버튼
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default ReactstrapDropdown;
