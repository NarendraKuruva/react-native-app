import React from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const NewTab = (props): React.ReactElement => {
  const { title, value } = props;
  console.log("🚀 ~ file: NewTab.js:8 ~ NewTab ~ title, value", title, value);

  return (
    <View>
      <View style={styles.newTabsContainer}>
        <Text>{title}</Text>
        <Text>{value}</Text>
      </View>
    </View>
  );
};

export default NewTab;

const styles = StyleSheet.create({
  newTabsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: "10px",
    flexGrow: 1,
    backgroundColor: "#1d2537",
    borderRadius: 16,
    marginTop: 16,
    marginBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
