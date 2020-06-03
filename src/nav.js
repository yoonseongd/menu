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
      timePassed: false,
    };
  }
  currentDay = new Date().getDay();
  //오늘 요일을 currentDay로 넣음.

  async componentDidMount() {
    await fetch("http://dys0707.dothome.co.kr/menuDayData.php")
      .then((res) => res.json())
      .then((result) => {
        // result = JSON.parse(result);
        // console.log(result);
        this.setState({
          items: result.filter((item) =>
            item.day.includes(`${this.currentDay}`)
          ),
          timePassed: true, //오늘 요일과 맞는 데이터들을 imtems 스테이트에 배열에 넣음.
        });
      });
  }

  render() {
    if (this.state.timePassed) {
      todayFood = this.state.items.filter((item) =>
        item.nav.includes("food")
      )[0];
      todayNewMenu = this.state.items.filter((item) =>
        item.nav.includes("NewMenu")
      )[0];
      todayYasic = this.state.items.filter((item) =>
        item.nav.includes("Yasic")
      )[0];
      console.log(todayFood.day);
    } //componentdidmount로 데이터를 json으로 받아오고 timePassed가 true되어 componentdidmount가 끝나서 각 컨텐츠 별로의 object 얻어 왔다. 자 이 각각의 데이터를 이제 각 라우터에 전달하자.

    return (
      console.log(todayFood)
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: "#694fad" }}
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
            props={}
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
