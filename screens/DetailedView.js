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
        <Text>{name}</Text>
        <Text>{description}</Text>
      </View>
    </TouchableOpacity>
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
