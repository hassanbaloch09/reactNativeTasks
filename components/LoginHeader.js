import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";

const LoginHeader = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{props.title}</Text>
      <Text style={styles.subHeading}>{props.subTitle}</Text>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  header: {
    height: hp("23%"),
    width: wp("100%"),
    paddingHorizontal: wp("5%"),
    backgroundColor: "#023B54",
    justifyContent: "flex-end",
    paddingBottom: hp("4%"),
  },
  heading: {
    fontFamily: "MB",
    fontSize: rf(22),
    color: "#fff",
    width: wp("60%"),
    marginBottom: hp("1%"),
  },
  subHeading: {
    fontFamily: "MR",
    fontSize: rf(12),
    color: "#fff",
  },
});
