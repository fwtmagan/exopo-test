import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Nav from "./nav";

function RankScreen({}) {
  const [randomImage, setRandomImage] = useState(
    require("../assets/clock.png")
  );
  const handleGoBackHome = () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    // Generate a random number (0 or 1)
    const randomNumber = Math.random();
    // Set the random image based on the generated number
    if (randomNumber < 0.5) {
      setRandomImage(require("../assets/clock.png"));
    } else {
      setRandomImage(require("../assets/wood.png"));
    }
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        source={require("../assets/ceiling.png")}
        style={styles.container}
      ></ImageBackground>
      <View style={styles.centerContainer}>
        <Text style={styles.headerText}>お見事です！</Text>
        <Text style={styles.containerText}>
          {`あなたの時間は、\n_____秒です。`}
        </Text>
        <Image style={styles.result} source={randomImage} />{" "}
        <TouchableOpacity
          onPress={handleGoBackHome}
          style={styles.goBackButton}
        >
          <Text style={styles.goBackButtonText}>終了</Text>
        </TouchableOpacity>
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
  headerText: {
    fontFamily: "NotoSansMono-Medium",
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  containerText: {
    fontFamily: "NotoSansMono-Medium",
    fontSize: 20,
    // fontWeight: "bold",
    color: "#000",
    margin: 10,
  },
  backgroundImage: {
    width: "100%",
    height: "auto",
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "repeat",
  },
  result: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  currentTimeText: {
    fontSize: 40,
    fontWeight: "bold",
    //marginTop: 10,
  },
  goBackButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#D9D9D9", // Change the background color as desired
    borderRadius: 4,
    width: 105,
  },
  goBackButtonText: {
    color: "#000", // Change the text color as desired
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RankScreen;
