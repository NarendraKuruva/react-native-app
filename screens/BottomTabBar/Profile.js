import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AboutMe from "./AboutMe";
import Hobbies from "./Hobbies";
import { MyTabBar } from "./TabBar";
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
export default function UserProfile({ route, navigation }) {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{ orientation: "all" }}
      >
        <Tab.Screen
          name="All Contacts"
          component={AboutMe}
          initialParams={route.params.tabs}
          options={{ tabBarLabel: "All Contacts" }}
        />
        <Tab.Screen
          name="Favorites"
          component={Hobbies}
          options={{ tabBarLabel: "Favorites" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
