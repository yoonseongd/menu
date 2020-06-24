import React, { Component } from "react";
import ChoiceContainer from "containers/ChoiceContainer";
import ChoiceTemplate from "./ChoiceTemplate";

class Nav extends Component {
  render() {
    return <ChoiceTemplate Choice={<ChoiceContainer />} />;
  }
}

export default Nav;
