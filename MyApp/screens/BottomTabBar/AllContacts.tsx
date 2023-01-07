import { observer } from "mobx-react";
import React, { useContext, useState } from "react";
import { Button, TextInput, View } from "react-native";

import { MyAppStoreContext } from "../../index.context";

import { MyList } from "../FlashList";

import Actions from "./Actions";

function AllContacts({ route }) {
  const myTasksStore = useContext(MyAppStoreContext);
  const users = myTasksStore.users;

  const [isOpen, setIsOpen] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const onChangeValue = value => {
    const values = users.filter(
      each =>
        each.firstName.includes(value.trim()) ||
        each.lastName.includes(value.trim())
    );
    setFilteredUsers(values);
  };

  const showClearBtn = myTasksStore.isBulkEditEnabled;

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          onChangeText={onChangeValue}
          placeholder={"Search Contacts - (Max 8 char)"}
          maxLength={15}
          keyboardType={"default"}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            paddingRight: 10,
            flexGrow: 1,
          }}
        />
      </View>
      {showClearBtn ? <Actions /> : null}

      <MyList users={filteredUsers} />
      <Button title="Click Me" onPress={toggleIsOpen} />
    </View>
  );
}

export default observer(AllContacts);
