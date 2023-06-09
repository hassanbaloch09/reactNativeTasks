import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomMenu from "../../components/BottomMenu";

const Dashboard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Dashboard</Text>
      <BottomMenu navigation={props?.navigation} active="home" />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
  },
});
