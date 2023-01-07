import "react-native-gesture-handler";

import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ActiveTab from "./MyApp/screens/ActiveTab";
import ActiveTabsList from "./MyApp/screens/ActiveTabsList";
import JobSections from "./MyApp/screens/HomeSectionsList";
import UserProfile from "./MyApp/screens/BottomTabBar/Profile";

import { usersData } from "./MyApp/data";

import { MyAppStoreContext } from "./MyApp/index.context";
import { MyAppStore } from "./MyApp/stores/MyAppStore";
import { UserModel } from "./MyApp/stores/UserModel";

const Stack = createNativeStackNavigator();

function App() {
  const myAppStore: MyAppStore = useContext(MyAppStoreContext);
  useEffect(() => {
    usersData.map(each => {
      myAppStore.addUser(new UserModel(each));
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          headerBackButtonMenuEnabled: false,
          headerBackVisible: false,
          headerTitleAlign: "center",
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

export default observer(App);
