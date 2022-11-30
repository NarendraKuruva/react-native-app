import React from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const NewTab = ({ item }): React.ReactElement => {
  const { title, description } = item;

  return (
    <TouchableOpacity style={styles.newTabsContainer}>
      <Text style={styles.textStyles}>{title}</Text>
      <Text style={styles.textStyles}>{description}</Text>
    </TouchableOpacity>
  );
};

export default NewTab;

const styles = StyleSheet.create({
  newTabsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1d2537",
    flexGrow: 1,
    padding: 10,
    borderRadius: 16,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
  },
  textStyles: {
    color: "#CBD5E1",
    fontSize: 16,
    fontWeight: "600",
    // fontFamily: "HK Grotesk",
  },
});
