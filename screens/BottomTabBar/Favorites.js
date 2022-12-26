import { observer } from "mobx-react";
import React, { useContext } from "react";

import { View, Text, SafeAreaView } from "react-native";
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

export default observer(Favorites);
