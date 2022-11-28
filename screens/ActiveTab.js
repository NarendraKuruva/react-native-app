import { StyleSheet, Text, View, Image } from "react-native";

import { cardsData } from "../data";

const ActiveTab = props => {
  const card = props.card;
  const title = card.title;
  const value = card.description;
  const imageUrl = "https://picsum.photos/200/300";

  return (
    <View style={styles.activeTabsContainer}>
      <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }} />
      <Text style={styles.headingStyles}>{title}</Text>
      <Text style={styles.description}>{value}</Text>
    </View>
  );
};

export default ActiveTab;

const styles = StyleSheet.create({
  activeTabsContainer: {
    backgroundColor: "#1d2537",
    borderRadius: 16,
    margin: 16,
    // width: "100%",
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headingStyles: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 24,
    color: "#3B82F6",
    paddingTop: 24,
  },
  description: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    color: "red",
    paddingTop: 16,
  },
});
