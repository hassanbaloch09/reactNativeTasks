import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Counter from "../Tasks/Counter";
import ResponsiveScreen from "../Tasks/ResponsiveScreen";
import Fonts from "../Tasks/Fonts";
import MyBox from "../Tasks/MyBox";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation(props) {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="MyBox" component={MyBox} />
      <Screen name="Fonts" component={Fonts} />
      <Screen name="ResponsiveScreen" component={ResponsiveScreen} />
      <Screen name="Counter" component={Counter} />
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
