import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const BottomMenu = (props) => {
  const [active, setActive] = useState(props?.active);
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <TouchableOpacity
          onPress={() => props?.navigation.navigate("ContactUs")}
          style={styles.imgWrapper}
        >
          <Image
            source={
              props?.active === "contact"
                ? require("../assets/bottomIcons/callDark.png")
                : require("../assets/bottomIcons/callLight.png")
            }
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.iconWrapper}>
        <TouchableOpacity
          onPress={() => props?.navigation.navigate("Dashboard")}
          style={styles.imgWrapper}
        >
          <Image
            source={
              props?.active === "home"
                ? require("../assets/bottomIcons/homeDark.png")
                : require("../assets/bottomIcons/homeLight.png")
            }
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.iconWrapper}>
        <TouchableOpacity
          onPress={() => props?.navigation.navigate("Profile")}
          style={styles.imgWrapper}
        >
          <Image
            source={
              props?.active === "profile"
                ? require("../assets/bottomIcons/userDark.png")
                : require("../assets/bottomIcons/userLight.png")
            }
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomMenu;

const styles = StyleSheet.create({
  container: {
    height: hp("7%"),
    width: wp("100%"),
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    borderTopWidth: 0.5,
    borderColor: "#fff",
  },
  iconWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgWrapper: {
    height: hp("3.5%"),
    width: hp("3.5%"),
  },
});
