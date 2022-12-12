import React from "react";

import { NavigationContext } from "@react-navigation/native";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeTab = ({ item }) => {
  const { userId, email, birthdate, firstName, lastName } = item;
  const navigation = React.useContext(NavigationContext);

  const handleOnPress = () =>
    navigation.navigate("Profile", {
      card: item,
    });

  return (
    <TouchableOpacity
      style={styles.homeTabContainer}
      onPress={handleOnPress}
      key={userId}
    >
      <Text style={styles.textStyles}>{firstName}</Text>
      <Text style={styles.textStyles}>{email}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  homeTabContainer: {
    backgroundColor: "#1d2537",
    padding: 10,
    borderRadius: 16,
    margin: 10,
  },
  textStyles: {
    color: "#CBD5E1",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default HomeTab;
