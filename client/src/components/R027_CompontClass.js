import React, { PureComponent } from "react";

class CompontClass extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
      StateArrayObj: ["react", { react: "200" }],
    };
  }

  buttonClick = (type) => {
    if (type === "String") {
      this.setState({ StateString: "리액트" });
    } else {
      this.setState({ StateArrayObj: ["리액트", { react: "200" }] });
    }
  };
  render() {
    console.log("reander() 실행");
    return (
      <div>
        <button onClick={(e) => this.buttonClick("String")}>문자열 변경</button>
        <button onClick={(e) => this.buttonClick("ArrayObject")}>
          객체 배열 변경
        </button>
      </div>
    );
  }
}

export default CompontClass;
