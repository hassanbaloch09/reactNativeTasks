import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";

const SocialButtons = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconWrapper}>
          <Image
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
            source={require("../assets/google.png")}
          />
        </View>
        <Text style={styles.buttonText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconWrapper}>
          <Image
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
            source={require("../assets/facebook.png")}
          />
        </View>
        <Text style={styles.buttonText}>Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialButtons;

const styles = StyleSheet.create({
  container: {
    height: hp("6%"),
    width: wp("90%"),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginTop: hp("2%"),
  },
  button: {
    height: "100%",
    width: "47%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C1C1C1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    height: hp("3%"),
    width: hp("3%"),
    marginRight: wp("2%"),
  },
  buttonText: {
    fontFamily: "MR",
    color: "#000",
    fontSize: rf(12),
  },
});
