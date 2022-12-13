import "react-native-gesture-handler";
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
import UserProfile from "./screens/BottomTabBar/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          headerBackButtonMenuEnabled: false,
          headerBackVisible: false,
          headerTitleAlign: "center",
          hideNavigationBar: false,
          statusBarColor: "#1d2537",
          statusBarStyle: "light",
          statusBarAnimation: "fade",
          fullScreenGestureEnabled: true,
          animation: "slide_from_right",
          orientation: "all",
          navigationBarColor: "#1d2537",
          navigationBarHidden: true,
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={JobSections} />
        <Stack.Screen
          name="Profile"
          component={ActiveTab}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Details"
          component={ActiveTabsList}
          options={{
            headerShown: true,
            animation: "slide_from_bottom",
            animationDuration: 10,
          }}
        />
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
