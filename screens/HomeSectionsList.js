import React from "react";
import { SectionList, View, Text, StyleSheet, StatusBar } from "react-native";

import { keyRoles, usersGroupsData } from "../data";

import HomeTab from "./HomeTab";

const JobSections = ({ navigation }) => {
  const renderItem = item => (
    <HomeTab navigation={navigation} item={item} key={item.userId} />
  );

  return (
    <View>
      <SectionList
        sections={usersGroupsData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => renderItem(item)}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </View>
  );
};

export default JobSections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});
