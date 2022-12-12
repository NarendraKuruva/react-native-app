import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { cardsData } from "../data";

const ActiveTab = ({ route, navigation }) => {
  const card = route.params.card;
  const title = card.firstName;
  const value = card.description;
  const imageUrl = card.profilePic;

  const handleOnPress = () => {
    navigation.navigate("Details", { props: { tabs: cardsData } });
  };

  return (
    <TouchableOpacity onPress={handleOnPress} key={card.userId}>
      <View style={styles.activeTabsContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 100, height: 100, borderRadius: 20 }}
        />
        <Text style={styles.headingStyles}>{title}</Text>
        <Text style={styles.description}>{value}</Text>
        <View>
          <Text>DOB</Text>
          <Text>{card.birthdate}</Text>
        </View>
        <View>
          <Text>Job: </Text>
          <Text>{card.job}</Text>
          <Text>{card.jobDescription}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ActiveTab;

const styles = StyleSheet.create({
  activeTabsContainer: {
    backgroundColor: "#1d2537",
    borderRadius: 16,
    margin: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    maxWidth: "100%",
    padding: 20,
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
    color: "#fff",
    paddingTop: 16,
    textAlign: "center",
  },
});
