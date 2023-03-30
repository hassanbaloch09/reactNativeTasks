import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Counter</Text>
      </View>
      <View style={styles.countWrapper}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setCount(count + 1)}
        >
          <Entypo name="plus" size={36} color="#C7E8CA" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.subButton} onPress={() => setCount(0)}>
          <Ionicons name="md-reload-outline" size={30} color="#C7E8CA" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.subButton}
          onPress={() => setCount(count - 1)}
        >
          <Entypo name="minus" size={30} color="#C7E8CA" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3333",
  },
  header: {
    height: "10%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  countWrapper: {
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {
    fontSize: 100,
    fontWeight: "800",
    color: "#CBE4DE",
  },
  buttonsWrapper: {
    height: "40%",
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "20%",
  },
  addButton: {
    height: "60%",
    width: "100%",
    backgroundColor: "#2E4F4F",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
  },
  subButton: {
    height: "35%",
    width: "48.5%",
    backgroundColor: "#2E4F4F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
