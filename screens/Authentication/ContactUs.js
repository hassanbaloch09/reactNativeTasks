import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomMenu from "../../components/BottomMenu";

const ContactUs = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Contact Us</Text>
      <BottomMenu navigation={props?.navigation} active="contact" />
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#222",
  },
});
