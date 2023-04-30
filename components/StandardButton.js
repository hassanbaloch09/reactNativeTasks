import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

const StandardButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default StandardButton;

const styles = StyleSheet.create({
  container: {
    height: hp("6%"),
    width: wp("90%"),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#023B54",
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "MB",
    color: "#fff",
    fontSize: rf(14),
  },
});
