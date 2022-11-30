import React from "react";
import { View, Text } from "react-native";

import NewTab from "./NewTab";

const ActiveTabsList = ({ route, navigation }): React.ReactElement => {
  const { tabs } = route.params.props;

  return (
    <View>
      {/* {tabs.map((tab, index) => {
        return (
          <NewTab title={tab.title} value={tab.description} key={tab.title} />
        );
      })} */}
      <Text>Narendra</Text>
    </View>
  );
};

export default ActiveTabsList;
