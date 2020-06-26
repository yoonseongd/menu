import * as React from "react";
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
import FoodTemplate from "./menu/FoodTemplate";
import Season from "./menu/Season";
// import { WebView } from "react-native-webview";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
// const videoheight = (windowWidth * 651) / 1157;

function BeforeNav() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/beforenav.png")}
        style={{
          flex: 1,
          resizeMode: "cover",
        }}
      >
        <View style={{ marginTop: windowHeight / 4, flex: 1 }}>
          <TouchableOpacity
            style={styles.image_btn}
            onPress={() => navigation.navigate("Season")}
          >
            <Image
              style={styles.image}
              source={require("../assets/choice.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.image_btn}
            onPress={() => alert("image clicked")}
          >
            <Image style={styles.image} source={require("../assets/new.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.image_btn}
            onPress={() => alert("image clicked")}
          >
            <Image
              style={styles.image}
              source={require("../assets/season.png")}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  image: { width: "80%", borderRadius: 30 },
  image_btn: {
    alignItems: "center",
    margin: 3,
  },
});
export default BeforeNav;
