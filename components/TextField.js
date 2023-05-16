import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const TextField = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{props.label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          secureTextEntry={props?.secureTextEntry}
          value={props?.value}
          onChangeText={props?.onChangeText}
        />
        {props?.password ? (
          <TouchableOpacity onPress={props.onPress}>
            <Entypo
              name={props.secureTextEntry ? "eye-with-line" : "eye"}
              size={rf(14)}
              color="#303030"
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  container: {
    height: hp("9%"),
    width: wp("90%"),
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: hp("2%"),
  },
  labelText: {
    fontFamily: "MR",
    color: "#303030",
    fontSize: rf(12),
  },
  inputWrapper: {
    height: hp("6%"),
    width: "100%",
    borderRadius: 10,
    borderColor: "#C1C1C1",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp("2%"),
  },
  input: {
    flex: 1,
    fontFamily: "MR",
    fontSize: rf(12),
  },
});
