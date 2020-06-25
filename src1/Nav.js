// import Choice from "./choice";
// import New from "./new";
// import Season from "./season";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// Create our stack navigator
// let Stack = createStackNavigator();

import {
  Text,
  Dimensions,
  Linking,
  Button,
  View,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import "react-native-gesture-handler";
import React, { Component } from "react";
import getItems from "./action";
import connect from "react-redux";

const initailState = {
  items: [],
};
class Nav extends Component {
  state = initailState;
  getItems = (result) => {
    this.props.dispatchGetItems(this.state);
    this.setState(initailState);
  };
  async componentDidMount() {
    await fetch("http://dys0707.dothome.co.kr/menuDayData.php")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        getItems(result);
      });
  }

  render() {
    return (
      <View style={{ margin: 20 }}>
        <Text>aaaa</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.navReducer.items,
});
const mapDispatchToProps = {
  dispatchGetItems: (items) => getItems(items),
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
