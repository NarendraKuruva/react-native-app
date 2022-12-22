import { observer } from "mobx-react";
import React, { useContext } from "react";

import { Text, View, ScrollView } from "react-native";
import { MyAppStoreContext } from "../../MyApp/index.context";
import { UserCard } from "./UserCard";
function AboutMe({ route }) {
  const myTasksStore = useContext(MyAppStoreContext);
  const users = myTasksStore.users;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "scroll",
      }}
    >
      {users.map(each => (
        <UserCard user={each} key={each.userId} />
      ))}
    </View>
  );
}

export default observer(AboutMe);
