import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

interface DetailedViewProps {
  name: string;
  description: string;
}

const DetailedView = () => {
  const name = "Jane";
  const description = "This is a description";

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 80,
    height: 80,
    backgroundColor: "red",
  },
});

export default DetailedView;
