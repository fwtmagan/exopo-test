import * as React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./page/home";
import SamuraiScreen from "./page/samurai";
import AddScreen from "./page/add";
import RankScreen from "./page/rank";

function App() {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerStyle: {
      backgroundColor: "#D0F6FE",
    },
    headerTitle: "",
  };

  // Add your Google Fonts here
  const theme = {
    ...DefaultTheme,
    fonts: {
      regular: {
        fontFamily: "NotoSansMono-Regular", // Replace with the correct font family name
      },
      medium: {
        fontFamily: "NotoSansMono-Medium", // Replace with the correct font family name
      },
      light: {
        fontFamily: "NotoSansMono-Light", // Replace with the correct font family name
      },
      thin: {
        fontFamily: "NotoSansMono-Thin", // Replace with the correct font family name
      },
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Samurai" component={SamuraiScreen} />
          <Stack.Screen name="Add" component={AddScreen} />
          <Stack.Screen name="Rank" component={RankScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
