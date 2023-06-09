import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./page/home";
import SecondScreen from "./page/second";

function App() {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerStyle: {
      backgroundColor: "#D0F6FE",
    },
    headerTitle: "",
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
