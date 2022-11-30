import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

interface DetailedViewProps {
  name: string;
  description: string;
}

const DetailedView = ({ navigation }) => {
  const name = "Jane";
  const description = "This is a description";

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Profile", {
          card: {
            title: "Title 1",
            description: "This is a description",
          },
        })
      }
    >
      <View style={styles.container}>
        <Text style={styles.textStyles}>{name}</Text>
        <Text>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    textAlign: "center",
    width: 225,
    height: 170,
    backgroundColor: "red",
  },
  textStyles: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 48,
    lineHeight: 63,
    color: "#FFFFFF",
  },
});

export default DetailedView;
