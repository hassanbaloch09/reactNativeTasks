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

export default function SignUp(props) {
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

  return (
    <View style={styles.container}>
      <LoginHeader
        title="Sign Up To Create Your Account"
        subTitle="Just few steps and you are ready to go!"
      />
      <View style={styles.fieldWrapper}>
        <TextField label="Name" placeholder="John Doe" />
        <TextField label="Email" placeholder="johndoe@gmail.com" />
        <TextField
          label="Password"
          placeholder="***********"
          password
          secureTextEntry={showPass ? true : false}
          onPress={() => setShowPass(!showPass)}
        />
        <TextField
          label="Confirm Password"
          placeholder="***********"
          password
          secureTextEntry={showPassConfirm ? true : false}
          onPress={() => setShowPassConfirm(!showPassConfirm)}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <StandardButton
          title="Sign Up"
          onPress={() => props.navigation.navigate("Login")}
        />
      </View>
      <Text style={styles.moreText}>Or Login With</Text>
      <SocialButtons />
      <View style={styles.footerWrap}>
        <Text style={styles.footerText}>
          Already have an account ?{" "}
          <Text
            onPress={() => props.navigation.navigate("Login")}
            style={styles.footerButtonTxt}
          >
            Login
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
    marginTop: hp("1%"),
  },
  buttonWrapper: {
    marginTop: hp("6%"),
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
