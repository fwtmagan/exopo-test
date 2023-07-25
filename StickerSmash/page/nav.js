import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

const Nav = ({ navigation }) => {
  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.button1]}
        onPress={() => handleButtonPress("Samurai")} // Navigate to Samurai.js
      >
        <Image
          style={styles.buttonImage}
          source={require("../assets/icon_1.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.button2]}
        onPress={() => handleButtonPress("Add")} // Navigate to add.js
      >
        <Image
          style={styles.buttonImage}
          source={require("../assets/icon_2.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.button3]}
        onPress={() => handleButtonPress("Rank")} // Navigate to rank.js
      >
        <Image
          style={styles.buttonImage}
          source={require("../assets/icon_3.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //padding: 5,
    backgroundColor: "#fff", // Background color for the button menu
    opacity: 0.8,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    borderRadius: 40, // Adjust this value to change the button shape (40 for circular button)
    padding: 8,
  },
  buttonImage: {
    width: 100, // Adjust the size of the button image
    height: 100,
    resizeMode: "contain",
    opacity: 1,
  },
  button1: {
    backgroundColor: "transparent", // Background color for button 1
  },
  button2: {
    backgroundColor: "transparent", // Background color for button 2
  },
  button3: {
    backgroundColor: "transparent", // Background color for button 3
  },
});

export default Nav;
