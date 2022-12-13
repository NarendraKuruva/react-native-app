import React from "react";

import { Text, View } from "react-native";

export default function AboutMe({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{"About Me"}</Text>
    </View>
  );
}
