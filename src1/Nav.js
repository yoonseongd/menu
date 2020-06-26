// import Choice from "./choice";
// import New from "./new";
// import Season from "./season";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Create our stack navigator
import {
  Dimensions,
  Button,
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import "react-native-gesture-handler";
import React, { Component } from "react";
import { getItems } from "./action";
import { connect } from "react-redux";
import Choice from "./menu/Choice";
import Season from "./menu/Season";
import New from "./menu/New";
let Stack = createStackNavigator();
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Nav extends Component {
  handleGetItems = (items) => {
    const { getItems } = this.props;
    getItems(items);
    console.log(items + "handle ok");
  };

  async componentDidMount() {
    await fetch("http://dys0707.dothome.co.kr/menuDayData.php")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // console.log(Object.values(result));
        this.handleGetItems(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Choice" component={Choice} />
          <Stack.Screen name="New" component={New} />

          <Stack.Screen
            name="Season"
            component={Season}
            // options={({ route }) => ({ title: route.params.count })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  items: state.navReducer.items,
});
const mapDispatchToProps = { getItems };

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
