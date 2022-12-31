import { observer } from "mobx-react";
import React, { useContext } from "react";

import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { MyAppStoreContext } from "../../MyApp/index.context";
import { UserModel } from "../../MyApp/stores/UserModel";
import { UserCard } from "./UserCard";

function Favorites() {
  const usersStore = useContext(MyAppStoreContext);
  const users: UserModel[] = [];

  usersStore.favoriteContacts.forEach(each => {
    const user = usersStore.getUser(each);
    if (user) users.push(user);
  });

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

export default observer(Favorites);
