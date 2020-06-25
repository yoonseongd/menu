// import "react-native-gesture-handler";
// import React, { Component } from "react";
// import Choice from "./choice";
// import New from "./new";
// import Season from "./season";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// // Create our stack navigator
// let Stack = createStackNavigator();

// class Nav extends Component {
//   getItems = (e) => {};

//   async componentDidMount() {
//     await fetch("http://dys0707.dothome.co.kr/menuDayData.php")
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//         getItems(result);
//       });
//   }

//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Choice" component={Choice} />
//           <Stack.Screen name="New" component={New} />
//           <Stack.Screen
//             name="Season"
//             component={Season}
//             // options={({ route }) => ({ title: route.params.count })}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

// export default Nav;
