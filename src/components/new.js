// import * as React from "react";
// import {
//   Text,
//   Dimensions,
//   Linking,
//   Button,
//   View,
//   Image,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// // import { WebView } from "react-native-webview";
// const windowWidth = Dimensions.get("window").width;
// const videoheight = (windowWidth * 651) / 1157;
// function New() {
//   return (
//     <LinearGradient colors={["#4b79a1", "#283e51"]} style={styles.container}>
//       <StatusBar barStyle={"light-content"} />

//       <ScrollView>
//         <View
//           style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//           <Image
//             style={styles.image}
//             source={require("../../assets/splash.png")}
//           />

//           <View style={{ flexDirection: "row" }}>
//             <View style={{ margin: 20 }}>
//               <Button
//                 title="요기요로 주문"
//                 onPress={() =>
//                   Linking.openURL("https://www.yogiyo.co.kr/mobile/#/")
//                 }
//               />
//             </View>
//             <View style={{ margin: 20 }}>
//               <Button
//                 title="배달의민족 주문"
//                 onPress={() =>
//                   Linking.openURL(
//                     "https://play.google.com/store/apps/details?id=com.sampleapp"
//                   )
//                 }
//               />
//             </View>
//           </View>
//           {/*
// <WebView
//   scalesPageToFit={true}
//   bounces={false}
//   javaScriptEnabled
//   style={{ height: videoheight, width: windowWidth , marginTop: 20, marginBottom:20}}
//   automaticallyAdjustContentInsets={false}
//    source={{html: '<iframe width="1157" height="651" src="https://www.youtube.com/embed/ygZ0uuFRWA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">></iframe>'}}
// /> */}
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   image: {
//     width: "100%",
//     margin: 60,
//   },
// });

// export default New;
