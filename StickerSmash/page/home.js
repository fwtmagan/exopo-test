import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        source={require("../assets/ceiling.png")}
        style={styles.container}
      ></ImageBackground>
      <View style={styles.centerContainer}>
        <Image
          style={styles.samurai}
          source={require("../assets/samurai_01.gif")}
        />
      </View>
      <ImageBackground
        source={require("../assets/wallpaper.png")}
        style={styles.backgroundImage}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 135,
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "repeat",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: 170,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "repeat",
  },
  samurai: {
    width: 180,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
});

export default HomeScreen;
