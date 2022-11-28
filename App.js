import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { cardsData } from "./data";
import ActiveTab from "./screens/ActiveTab";
export default function App() {
  return (
    <View style={styles.container}>
      {cardsData.map(eachCard => {
        return <ActiveTab key={eachCard.title} card={eachCard} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    height: 50,
  },
});
