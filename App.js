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

import ActiveTab from "./screens/ActiveTab";
import ActiveTabsList from "./screens/ActiveTabsList";
import HomeTabs from "./screens/HomeTabs";
import JobSections from "./screens/HomeSectionsList";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={JobSections} />
        <Stack.Screen name="Profile" component={ActiveTab} />
        <Stack.Screen name="Details" component={ActiveTabsList} />
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
