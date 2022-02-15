/*  props 를 사용하면 데이터를 부모에서 자식으로 전송,
  만약 손자에서 부모의 데이터를 필요로 한다면, 
  자식 컴포넌트가 중간에서 데이터를 전달해야한다.
  이때 자식이 부모의 데이터가 필요하지 않은 상황이라면 불필요한 코드를 작성하게 된다.
  컨텍스트는 데이터의 공급자와 소비자를 정의하고 데이터가 필요한 컴포넌트만 사용할 수 있게 구현한다.
*/

import React, { Component } from "react";
import Children from "./contextChildren";

const { Provider, Consumer } = React.createContext();
export { Consumer };

class ContextApi extends Component {
  render() {
    return (
      <Provider value="React 200">
        <Children />
      </Provider>
    );
  }
}

export default ContextApi;
