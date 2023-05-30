import { Button, View, Text } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0); //カウント保存用
  useEffect(() => {
    (async () => {
      const count = await AsyncStorage.getItem("count"); // 保存されたcountを取得する処理
      setCount(Number(count || 0) + 1); // Numberに変換してインクリメントする
    })();
  }, []);
  useEffect(() => {
    if (count) {
      AsyncStorage.setItem("count", String(count)); // 文字列型に変換して保存する
    }
  }, [count]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HOME {`${count}`}</Text>
      <Button title="Screen2" onPress={() => navigation.navigate("Second")} />
    </View>
  );
}

export default HomeScreen;
