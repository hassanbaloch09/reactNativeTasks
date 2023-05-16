import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import LoginHeader from "../../components/LoginHeader";
import TextField from "../../components/TextField";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import StandardButton from "../../components/StandardButton";
import SocialButtons from "../../components/SocialButtons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function Login(props) {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  const navigation = useNavigation();

  const onLogin = () => {
    if (email.length == 0) {
      alert("Please Enter Email");
    } else if (password.length == 0) {
      alert("Please Enter Password");
    } else {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setLoading(false);
          navigation.navigate("Dashboard");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(error.message);
          setLoading(false);
          // ..
        });
    }
  };

  return (
    <View style={styles.container}>
      <LoginHeader
        title="Sign In To Your Account"
        subTitle="Let us have signed you in!"
      />
      <View style={styles.fieldWrapper}>
        <TextField
          label="Email"
          placeholder="johndoe@gmail.com"
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <TextField
          label="Password"
          placeholder="***********"
          password
          secureTextEntry={showPass ? false : true}
          onPress={() => setShowPass(!showPass)}
          value={password}
          onChangeText={(val) => setPassword(val)}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <StandardButton title="Login" onPress={onLogin} loading={loading} />
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
