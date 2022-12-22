import { observer } from "mobx-react";
import React, { useContext } from "react";

import { View, Text } from "react-native";
import { MyAppStoreContext } from "../../MyApp/index.context";
import { UserModel } from "../../MyApp/stores/UserModel";
import { UserCard } from "./UserCard";

function Hobbies() {
  const usersStore = useContext(MyAppStoreContext);
  const users: UserModel[] = [];

  usersStore.favoriteContacts.forEach(each => {
    const user = usersStore.getUser(each);
    if (user) users.push(user);
  });

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

export default observer(Hobbies);
