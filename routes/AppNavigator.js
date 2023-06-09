import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Login from "../screens/Login";
import Home from "../screens/Home";
import Counter from "../Tasks/Counter";
import ResponsiveScreen from "../Tasks/ResponsiveScreen";
import Fonts from "../Tasks/Fonts";
import MyBox from "../Tasks/MyBox";
import Shuffle from "../Tasks/Shuffle";
import Login from "../screens/Authentication/Login";
import SignUp from "../screens/Authentication/SignUp";
import Dashboard from "../screens/Authentication/Dashboard";
import SearchFilter from "../Tasks/SearchFilter";
import ContactUs from "../screens/Authentication/ContactUs";
import Profile from "../screens/Authentication/Profile";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation(props) {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="ContactUs" component={ContactUs} />
      <Screen name="Profile" component={Profile} />
      <Screen name="SearchFilter" component={SearchFilter} />
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Shuffle" component={Shuffle} />
      <Screen name="Counter" component={Counter} />
      <Screen name="MyBox" component={MyBox} />
      <Screen name="Fonts" component={Fonts} />
      <Screen name="ResponsiveScreen" component={ResponsiveScreen} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
