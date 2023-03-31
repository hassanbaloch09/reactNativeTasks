import React from "react";
import { AppNavigator } from "./routes/AppNavigator";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    MB: require("./assets/fonts/Montserrat-Bold.ttf"),
    MR: require("./assets/fonts/Montserrat-Regular.ttf"),
    ML: require("./assets/fonts/Montserrat-Light.ttf"),
    AR: require("./assets/fonts/Alkatra-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#222" />
      </View>
    );
  }

  return <AppNavigator />;
}
