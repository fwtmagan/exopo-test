import React from "react";
import Nav from "./nav";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

const SamuraiScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/ceiling.png")}
        style={styles.ceiling}
      >
        {/* White transparent rectangle with text */}
        <View style={styles.header}>
          <View style={styles.rectangle}>
            <Text style={styles.headerText}>さむらい</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.centerContainer}>
        <Image
          style={styles.userIcon}
          source={require("../assets/profile.png")}
        />
        <Text style={styles.userName}>ユーザー</Text>
      </View>
      <View style={styles.side}>
        <Text style={styles.title}>過去3日の履歴</Text>
        <View style={styles.texts}>
          <Text style={styles.textItem}>・2023/06/04</Text>
          <Text style={styles.textItem}>・2023/06/02</Text>
          <Text style={styles.textItem}>・2023/06/01</Text>
        </View>
      </View>
      <ImageBackground
        source={require("../assets/wallpaper.png")}
        style={styles.backgroundImage}
      >
        {/* Your content for the wallpaper */}
      </ImageBackground>
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  ceiling: {
    width: "100%",
    height: 135,
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "repeat",
  },
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rectangle: {
    width: 210,
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.5)", // White transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "NotoSansMono-Medium",
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userIcon: {
    width: 120,
    height: 120,
  },
  userName: {
    fontSize: 20,
    color: "#000",
    marginTop: 10,
    textAlign: "center",
  },
  side: {
    flex: 0.8,
    alignItems: "flex-start", // Align items to the left
    justifyContent: "flex-start", // Justify content to the left
    marginLeft: 20, // Add left margin for better alignment
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
  },
  texts: {
    marginTop: 10,
  },
  textItem: {
    fontSize: 16,
    color: "#000",
  },
  backgroundImage: {
    width: "100%",
    height: "auto",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "repeat",
  },
});

export default SamuraiScreen;
