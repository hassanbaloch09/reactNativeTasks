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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function SignUp(props) {
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const navigation = useNavigation();

  const onSignUp = () => {
    if (name.length == 0) {
      alert("Please Enter Name");
    } else if (email.length == 0) {
      alert("Please Enter Email");
    } else if (password.length == 0) {
      alert("Please Enter Password");
    } else if (confirmPass.length == 0) {
      alert("Please Enter Confirm Password");
    } else if (password != confirmPass) {
      alert("Confirm Password does not match");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigation.navigate("Login");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    }
  };

  return (
    <View style={styles.container}>
      <LoginHeader
        title="Sign Up To Create Your Account"
        subTitle="Just few steps and you are ready to go!"
      />
      <View style={styles.fieldWrapper}>
        <TextField
          label="Name"
          placeholder="John Doe"
          value={name}
          onChangeText={(val) => setName(val)}
        />
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
        <TextField
          label="Confirm Password"
          placeholder="***********"
          password
          secureTextEntry={showPassConfirm ? false : true}
          onPress={() => setShowPassConfirm(!showPassConfirm)}
          value={confirmPass}
          onChangeText={(val) => setConfirmPass(val)}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <StandardButton title="Sign Up" onPress={onSignUp} loading={loading} />
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
