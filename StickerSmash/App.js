// In App.js in a new project

import * as React from "react";
import { Button, View, Text } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./page/home";
import SecondScreen from "./page/second";

// function HomeScreen({ navigation }) {
//   const [count, setCount] = useState(0); //カウント保存用
//   useEffect(() => {
//     (async () => {
//       const count = await AsyncStorage.getItem("count"); // 保存されたcountを取得する処理
//       setCount(Number(count || 0) + 1); // Numberに変換してインクリメントする
//     })();
//   }, []);
//   useEffect(() => {
//     if (count) {
//       AsyncStorage.setItem("count", String(count)); // 文字列型に変換して保存する
//     }
//   }, [count]);

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Text>{`${count}`}</Text>
//       <Button title="Next." onPress={() => navigation.navigate("Details")} />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push("Details")}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Second" component={SecondScreen} />
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
