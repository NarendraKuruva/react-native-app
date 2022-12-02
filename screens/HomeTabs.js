import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import HomeTab from "./HomeTab";
import { homeTabsData, usersData } from "../data";

const HomeTabs = ({ navigation }) => {
  const tabs = usersData;

  const renderItem = item => (
    <HomeTab navigation={navigation} item={item} key={item.userId} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={item => renderItem(item)}
        keyExtractor={item => item.id}
        getItemCount={data.length}
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
