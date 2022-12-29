import { observer } from "mobx-react";
import React, { useContext, useState } from "react";

import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  StatusBar,
} from "react-native";
import { MyAppStoreContext } from "../../MyApp/index.context";
import { UserCard } from "./UserCard";
function AllContacts({ route }) {
  const myTasksStore = useContext(MyAppStoreContext);
  const users = myTasksStore.users;

  const [filteredUsers, setFilteredUsers] = useState(users);

  const onChangeValue = ({ nativeEvent: { eventCount, target, text } }) => {
    const values = filteredUsers.filter(
      each => each.firstName.includes(text) || each.lastName.includes(text)
    );
    setFilteredUsers(values);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 10,
        }}
      >
        <TextInput
          onChange={onChangeValue}
          style={{
            borderStyle: "solid",
            borderColor: "#000",
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        />
      </View>
      <ScrollView
        style={{
          flex: 1,
          flexDirection: "column",
          overflow: "scroll",
          marginTop: 8,
          marginBottom: 8,
          height: "100%",
        }}
        contentContainerStyle={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {filteredUsers.map(each => (
          <UserCard user={each} key={each.userId} />
        ))}
      </ScrollView>
    </View>
  );
}

export default observer(AllContacts);

<View></View>;
