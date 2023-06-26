import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  let cardData = ["John", "Raymond", "Ashler", "Neil", "Brad", "Aston"];

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Search"
          style={styles.inputField}
          value={search}
          onChangeText={(val) => setSearch(val)}
        />
      </View>
      {cardData
        ?.filter((item) => item.toLowerCase().includes(search?.toLowerCase()))
        .map((item, index) => {
          return (
            <View style={styles.card} key={index}>
              <Text style={styles.title}>{item}</Text>
            </View>
          );
        })}
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    paddingTop: hp("5%"),
  },
  inputWrapper: {
    height: hp("5%"),
    width: wp("90%"),
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("2%"),
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  inputField: {
    flex: 1,
  },
  card: {
    height: hp("5%"),
    width: wp("90%"),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightyellow",
    marginTop: hp("1%"),
    borderRadius: 10,
  },
});
