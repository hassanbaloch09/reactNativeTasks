import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import LoginHeader from "../components/LoginHeader";
import TextField from "../components/TextField";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import StandardButton from "../components/StandardButton";
import SocialButtons from "../components/SocialButtons";

export default function Login(props) {
  const [showPass, setShowPass] = useState(false);
  return (
    <View style={styles.container}>
      <LoginHeader
        title="Sign In To Your Account"
        subTitle="Let us have signed you in!"
      />
      <View style={styles.fieldWrapper}>
        <TextField label="Email" placeholder="johndoe@gmail.com" />
        <TextField
          label="Password"
          placeholder="***********"
          password
          secureTextEntry={showPass ? true : false}
          onPress={() => setShowPass(!showPass)}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <StandardButton
          title="Login"
          onPress={() => props.navigation.navigate("SignUp")}
        />
      </View>
      <Text style={styles.moreText}>Or Login With</Text>
      <SocialButtons />
      <View style={styles.footerWrap}>
        <Text style={styles.footerText}>
          Don't have an account ?{" "}
          <Text
            onPress={() => props.navigation.navigate("SignUp")}
            style={styles.footerButtonTxt}
          >
            Sign Up{" "}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  fieldWrapper: {
    marginTop: hp("6%"),
  },
  buttonWrapper: {
    marginTop: hp("8%"),
  },
  moreText: {
    fontFamily: "MR",
    textAlign: "center",
    marginTop: hp("2%"),
  },
  footerWrap: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: hp("5%"),
  },
  footerText: {
    fontFamily: "MR",
    color: "#303030",
    fontSize: rf(12),
  },
  footerButtonTxt: {
    fontFamily: "MB",
    color: "#023B54",
    fontSize: rf(12),
  },
});
