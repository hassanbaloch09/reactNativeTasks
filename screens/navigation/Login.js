import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Login = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: "10%",
    width: "60%",
    backgroundColor: "yellow",

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
