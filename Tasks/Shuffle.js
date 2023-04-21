import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const Shuffle = () => {
  let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const [cards, setCards] = useState(arr);

  const onShuffle = () => {
    const shuffleArr = [...arr].sort(() => Math.random() - 0.5);
    setCards(shuffleArr);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {cards.map((item, index) => {
          return (
            <View key={index} style={styles.box}>
              <Text style={styles.boxText}>{item}</Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={styles.button} onPress={onShuffle}>
        <Text>Shuffle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Shuffle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
    flex: 1,
  },
  wrapper: {
    height: "50%",
    width: "100%",
    marginTop: 50,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    height: "18%",
    width: "18%",
    backgroundColor: "#e5e5e5",
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    fontSize: 22,
  },
  button: {
    height: "7%",
    width: "60%",
    borderRadius: 10,
    backgroundColor: "yellow",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
