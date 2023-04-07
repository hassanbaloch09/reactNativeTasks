import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function MyBox() {
  return (
    <View style={styles.container}>
      <View style={styles.one}></View>
      <View style={styles.two}></View>
      <View style={styles.three}></View>
      <View style={styles.four}></View>
      <View style={styles.boxContain}>
        <View style={styles.five}></View>
        <View style={styles.six}></View>
        <View style={styles.seven}></View>
        <View style={styles.eight}></View>
        <View style={styles.nine}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "space-around",
  },
  one: {
    height: "16%",
    width: "90%",
    backgroundColor: "#E64848",
    marginTop: "10%",
    borderRadius: 10,
  },
  two: {
    height: "16%",
    width: "55%",
    backgroundColor: "#293462",
    borderRadius: 10,
  },
  three: {
    height: "16%",
    width: "30%",
    backgroundColor: "#FFE9AE",
    borderRadius: 10,
  },
  four: {
    height: "55%",
    width: "55%",
    backgroundColor: "#3EC70B",
    borderRadius: 10,
  },
  boxContain: {
    height: "55%",
    width: "30%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  five: {
    height: "31.5%",
    width: "100%",
    backgroundColor: "#FF6FB5",
    borderRadius: 10,
  },
  six: {
    height: "31.5%",
    width: "45%",
    backgroundColor: "#EE5007",
    borderRadius: 10,
  },
  seven: {
    height: "31.5%",
    width: "45%",
    backgroundColor: "#219F94",
    borderRadius: 10,
  },
  eight: {
    height: "31.5%",
    width: "45%",
    backgroundColor: "#FBCB0A",
    borderRadius: 10,
  },
  nine: {
    height: "31.5%",
    width: "45%",
    backgroundColor: "#8E0505",
    borderRadius: 10,
  },
});
