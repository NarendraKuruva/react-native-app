import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { cardsData } from "./data";
import ActiveTab from "./screens/ActiveTab";
import Navigations from "./routes/HomeStack";
export default function App() {
  return (
    <ScrollView scrollViewStyles={styles.scrollViewStyles} horizontal={false}>
      <View styles={styles.container}>
        {cardsData.map(eachCard => {
          return <ActiveTab key={eachCard.title} card={eachCard} />;
        })}
      </View>
    </ScrollView>
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
  },
  scrollViewStyles: {
    width: "100%",
  },
});
