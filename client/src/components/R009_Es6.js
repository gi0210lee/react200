import React, { PureComponent } from "react";

class Es6 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componenthidMount() {
    const jsString1 = "자바스크립트";
    const jsString2 = "입니다\n다음 줄입니다.";
    console.log(jsString1 + " 문자열" + jsString2 + "~");

    const Es6String1 = "ES6";
    const Es6String2 = "입니다.";
    console.log(`${Es6String1} 문자열${Es6String2}!!
____다음 줄 입니다.`);

    const LongString = "ES6에 추가된 String 함수들입니다.";
    console.log("startsWith : " + LongString.startsWith("ES6에 추가"));
    console.log("endsWith : " + LongString.endsWith("함수들입니다."));
    console.log("includes : " + LongString.includes("추가된 String"));
  }

  render() {
    return <h2>[THIS ES6 STRING]</h2>;
  }
}

export default Es6;