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
// import { WebView } from "react-native-webview";
const windowWidth = Dimensions.get("window").width;
const videoheight = (windowWidth * 651) / 1157;

function New() {
  return (
    <View style={{ flex: 1 }}>
      <FoodTemplate />
    </View>
  );
}
export default New;
