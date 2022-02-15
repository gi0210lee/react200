import React, { PureComponent } from "react";

class SpreadOperator extends PureComponent {
  componenthidMount() {
    var varArray1 = ["num1", "num2"];
    var varArray2 = ["num3", "num4"];
    var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
    console.log("1. sumVarArr: " + sumVarArr);

    let sumLetArr = [...varArray1, ...varArray2];
    console.log("2. sumLetArr: " + sumLetArr);

    const [sum1, sum2, ...remain] = sumLetArr;
    console.log(
      "3. sum1: " + sum1 + ", sum2 : " + sum2 + ", remain: " + remain
    );

    var varObj1 = { key1: "val1", key2: "val2" };
    var varObj2 = { key2: "new1", key3: "new2" };
    var sumVarObj = Object.assign({}, varObj1, varObj2);
    console.log("4. sumVarObj : " + JSON.stringify(sumVarObj));

    var sumLetObj = { ...varObj1, ...varObj2 };
    console.log("5. sumLetObj : " + JSON.stringify(sumLetObj));

    var { key1, key3, ...others } = sumLetObj;
    console.log(
      "6 key:1 " +
        key1 +
        ", key3 : " +
        key3 +
        ", others : " +
        JSON.stringify(others)
    );
  }
  render() {
    return <div>[THSI IS SpreadOperator]</div>;
  }
}

export default SpreadOperator;