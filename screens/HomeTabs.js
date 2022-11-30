import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { homeTabsData } from "../data";

import ActiveTabsList from "./ActiveTabsList";
import NewTabsList from "./NewTabsList";
import NewTab from "./NewTab";

const HomeTabs = ({ navigation }) => {
  const tabs = homeTabsData;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={NewTab}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  activeTabsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    height: "40vh",
    overflow: "scroll",
    padding: 10,
  },
  newTabsContainer: {
    width: "100%",
    padding: "20px",
    height: "60vh",
    overflow: "scroll",
  },
});

export default HomeTabs;
