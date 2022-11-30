import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { cardsData } from "./data";
import ActiveTab from "./screens/ActiveTab";
import DetailedView from "./screens/DetailedView";
import ActiveTabsList from "./screens/ActiveTabsList";
const Stack = createNativeStackNavigator();

export default function App() {
  const [card1, card2] = cardsData;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={DetailedView} />
        <Stack.Screen name="Profile" component={ActiveTab} />
        <Stack.Screen name="TabsList" component={ActiveTabsList} />
      </Stack.Navigator>
    </NavigationContainer>
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
    height: "100%",
  },
  scrollViewStyles: {
    width: "100%",
  },
});
