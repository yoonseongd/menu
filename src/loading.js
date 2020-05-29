import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import Nav from "./nav";

import Animated, { Easing } from "react-native-reanimated";
import { TapGestureHandler, State } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug("stop clock", stopClock(clock))),
    state.position,
  ]);
}

class Loading extends Component {
  constructor() {
    super();
    this.state = {
      startClick: false,
    };
    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            ),
          ]),
      },
      setTimeout(
        function () {
          this.setState({ startClick: true });
        }.bind(this),
        5000
      ),
    ]);

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP,
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3, 0],
      extrapolate: Extrapolate.CLAMP,
    });
  }
  render() {
    if (!this.state.startClick) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "flex-end",
          }}
        >
          <ImageBackground
            style={{ width: "100%", height: "100%" }} //View를 꽉채우도록
            source={require("../assets/down.png")} //이미지경로
            resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택
          >
            <Animated.View
              style={{
                ...StyleSheet.absoluteFill,
                transform: [{ translateY: this.bgY }],
              }}
            >
              <Image
                source={require("../assets/라면.jpg")}
                resizeMode="cover"
                style={{ flex: 1, height: null, width: null }}
              />
            </Animated.View>
            <View style={{ height: "150%", justifyContent: "center" }}>
              <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                <Animated.View
                  style={{
                    ...styles.button,
                    opacity: this.buttonOpacity,
                    transform: [{ translateY: this.buttonY }],
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>야식</Text>
                </Animated.View>
              </TapGestureHandler>
              <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                <Animated.View
                  style={{
                    ...styles.button,
                    backgroundColor: "#2E71DC",
                    opacity: this.buttonOpacity,
                    transform: [{ translateY: this.buttonY }],
                  }}
                >
                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                  >
                    제철음식
                  </Text>
                </Animated.View>
              </TapGestureHandler>
            </View>
          </ImageBackground>
        </View>
      );
    } else {
      return <Nav />;
    }
  }
}
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
});
