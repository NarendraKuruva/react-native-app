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

  const onChangeValue = value => {
    const values = users.filter(
      each =>
        each.firstName.includes(value.trim()) ||
        each.lastName.includes(value.trim())
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
          className={"border-solid border-gray-900 border"}
          onChangeText={onChangeValue}
          multiline={true}
          placeholder={"Search Contacts - (Max 8 char)"}
          maxLength={50}
          keyboardType={"default"}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        />
      </View>
      <ScrollView
        className={"flex flex-1 flex-col h-full"}
        contentContainerStyle={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        pagingEnabled={true}
        snapToInterval={5}
        showsHorizontalScrollIndicator={true}
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
