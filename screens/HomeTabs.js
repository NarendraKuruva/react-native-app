import React from "react";
import { View, StyleSheet } from "react-native";

import ActiveTabsList from "./ActiveTabsList";
import NewTabsList from "./NewTabsList";

interface HomeTabsProps {
  activeTabs: Array<{
    title: string;
    value: string;
    imageUrl: string;
  }>;
  newTabs: Array<{ title: string; value: string }>;
}

const HomeTabs = (props: HomeTabsProps) => {
  const { activeTabs, newTabs } = props;

  return (
    <>
      <View style={{ backgroundColor: "#0F172A" }}>
        <View style={styles.activeTabsContainer}>
          <ActiveTabsList tabs={activeTabs} />
        </View>
        <View
          style={{
            borderBottomColor: "#64748B",
            borderBottomWidth: 3,
            borderRadius: 6,
            marginLeft: 10,
            marginRight: 10,
          }}
        />
        <View style={styles.newTabsContainer}>
          <NewTabsList tabs={newTabs} />
        </View>
      </View>
    </>
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
