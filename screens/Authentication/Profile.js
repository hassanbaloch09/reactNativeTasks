import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomMenu from "../../components/BottomMenu";

const Profile = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Profile</Text>
      <BottomMenu navigation={props?.navigation} active="profile" />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
  },
});
