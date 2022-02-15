import "./env";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./css/new.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/footer/Footer";
import HeaderAdmin from "./components/header/HeaderAdmin";
import LoginForm from "./components/LoginForm";
import SoftwareList from "./components/SoftToolsManage/SoftwareList";
import SoftwareView from "./components/SoftToolsManage/SoftwareView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderAdmin />
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/SoftwareList" component={SoftwareList} />
        <Route exact path="/SoftwareView/:swtcode" component={SoftwareView} />
        <Footer />
      </div>
    );
  }
}

export default App;
