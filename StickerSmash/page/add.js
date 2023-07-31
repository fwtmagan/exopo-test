import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Nav from "./nav";

function AddScreen({ navigation }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex(1);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const images = [
    require("../assets/samurai_03.png"),
    require("../assets/light.png"),
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        source={require("../assets/ceiling.png")}
        style={styles.container}
      ></ImageBackground>
      <View style={styles.centerContainer}>
        {currentImageIndex === 0 && (
          <Text style={styles.linesText}>おぉぉー！</Text>
        )}
        <Image style={styles.samurai} source={images[currentImageIndex]} />
      </View>
      <ImageBackground
        source={require("../assets/wallpaper.png")}
        style={styles.backgroundImage}
      ></ImageBackground>
      <Nav navigation={navigation} />
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
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "auto",
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "repeat",
  },
  samurai: {
    width: 250,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  linesText: {
    fontSize: 40,
    fontWeight: "bold",
    //marginTop: 10,
  },
});

export default AddScreen;
