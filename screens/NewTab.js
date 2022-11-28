import React from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface NewTabProps {
  title: string;
  value: string;
  onPress: () => void;
}

const NewTab = (props: NewTabProps): React.ReactElement => {
  const { title, value, onPress } = props;

  return (
    <>
      <TouchableOpacity style={styles.newTabsContainer} onPress={onPress}>
        <Text>{title}</Text>
        <Text>{value}</Text>
      </TouchableOpacity>
    </>
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
