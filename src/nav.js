import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Food from "./food";
import Yasic from "./yasic";
import NewMenu from "./newMenu";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
    await fetch("http://dys0707.dothome.co.kr/menuDayData.php")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result,
        });
      });
  }
  currentDay = new Date().getDay();

  render() {
    // console.log(this.currentDay);
    const today = this.state.items.filter((item) =>
      item.day.includes(`${this.currentDay}`)
    );
    const todayFood = today.filter((item) => item.nav.includes("food"));
    const todayNewMenu = today.filter((item) => item.nav.includes("NewMenu"));
    const todayYasic = today.filter((item) => item.nav.includes("Yasic"));

    // console.log(today);
    // console.log(todayFood);

    // console.log(this.state.items)
    // const item = this.state.items.map((item) => console.log(item.day));

    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: "#694fad" }}
          screenProps={todayFood}
        >
          <Tab.Screen
            name="오늘의 야식"
            component={Yasic}
            options={{
              tabBarLabel: "오늘의 야식",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="food-fork-drink"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="신 메뉴"
            component={NewMenu}
            options={{
              tabBarLabel: "신 메뉴",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="new-box"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="제철 음식"
            component={Food}
            options={{
              tabBarLabel: "제철 음식",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="fish" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
export default Nav;
