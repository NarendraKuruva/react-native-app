import * as React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AboutMe from "./AboutMe";
import Hobbies from "./Hobbies";

const Tab = createBottomTabNavigator();

export function MyTabBar({ state, descriptors, navigation }) {
  const renderTab = (
    options,
    route,
    isFocused: boolean,
    onPress,
    onLongPress
  ) => {
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;

    return (
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={{ flex: 1, margin: 10 }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 10,
            padding: 5,
          }}
        >
          <Icon
            name="user"
            backgroundColor="#3b5998"
            onPress={console.log}
            size={25}
          />
          <Text style={{ marginLeft: 12 }}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flexDirection: "row", backgroundColor: "#f0ddc0" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return renderTab(options, route, isFocused, onPress, onLongPress);
      })}
    </View>
  );
}
