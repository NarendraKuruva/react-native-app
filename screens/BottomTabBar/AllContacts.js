import { observer } from "mobx-react";
import React, { useContext } from "react";

import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { MyAppStoreContext } from "../../MyApp/index.context";
import { UserCard } from "./UserCard";
function AllContacts({ route }) {
  const myTasksStore = useContext(MyAppStoreContext);
  const users = myTasksStore.users;

  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: "column",
        overflow: "scroll",
        marginTop: 8,
        marginBottom: 8,
      }}
      contentContainerStyle={{
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {users.map(each => (
        <UserCard user={each} key={each.userId} />
      ))}
    </ScrollView>
  );
}

export default observer(AllContacts);
