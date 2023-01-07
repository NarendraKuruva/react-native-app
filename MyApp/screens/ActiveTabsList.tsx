import React from "react";
import { FlatList, SafeAreaView, StyleSheet, StatusBar } from "react-native";

import NewTab from "./NewTab";

const ActiveTabsList = ({ route, navigation }): React.ReactElement => {
  const { tabs } = route.params.props;

  return (
    <SafeAreaView style={styles.container} key={"ActiveTabsList"}>
      <FlatList
        data={tabs}
        renderItem={NewTab}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ActiveTabsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
