import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";

const ResponsiveScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.insideBox}>
          <Text style={styles.bodyText}>Hello from Eternal Logic</Text>
        </View>
      </View>
      <View style={styles.square}></View>
    </View>
  );
};

export default ResponsiveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  box: {
    height: hp("10%"),
    width: wp("50%"),
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  insideBox: {
    height: hp("10%"),
    width: wp("80%"),
    backgroundColor: "#222",
    paddingHorizontal: wp("2%"),
  },
  square: {
    height: hp("10%"),
    width: hp("10%"), // use the same dimension for height and width
    backgroundColor: "#333",
    marginTop: hp("2%"), // lets make it circle
    borderRadius: 100,
  },
  bodyText: {
    color: "#fff",
    fontSize: rf(18), // this is the responsive font
  },
});

// lets use fonts
