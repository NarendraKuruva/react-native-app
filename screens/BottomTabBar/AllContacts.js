import { observer } from "mobx-react";
import React, { useContext } from "react";

import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { MyAppStoreContext } from "../../MyApp/index.context";
import { UserCard } from "./UserCard";
function AllContacts({ route }) {
  const myTasksStore = useContext(MyAppStoreContext);
  const users = myTasksStore.users;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "scroll",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      {users.map(each => (
        <UserCard user={each} key={each.userId} />
      ))}
    </SafeAreaView>
  );
}

export default observer(AllContacts);
