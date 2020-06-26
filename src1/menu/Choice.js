import * as React from "react";
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
import { LinearGradient } from "expo-linear-gradient";
import FoodTemplate from "./FoodTemplate";
import Season from "./Season";
// import { WebView } from "react-native-webview";
const windowWidth = Dimensions.get("window").width;
const videoheight = (windowWidth * 651) / 1157;

function Choice() {
  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Go to static Season screen"
        onPress={() =>
          props.navigation.navigate("Season", {
            count,
          })
        }
      />
      <FoodTemplate />
    </View>
  );
}
export default Choice;
