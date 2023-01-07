import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Button, Pressable, Text, View } from "react-native";
import { MyAppStoreContext } from "../../index.context";

const Actions = () => {
  const store = useContext(MyAppStoreContext);

  const handlePressLike = () => {
    store.bulkEditIds.map(each => {
      store.addFavoriteUser(each);
    });
  };

  const handlePressDislike = () => {
    store.bulkEditIds.map(each => {
      store.removeFavoriteUser(each);
    });
  };
  const handlePressClear = () => {
    store.clearBulkEdit();
  };
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
        paddingHorizontal: 10,
      }}
    >
      <Pressable
        style={{
          marginHorizontal: 5,
          borderWidth: 2,
          borderColor: "#000",
          paddingHorizontal: 15,
          borderRadius: 8,
        }}
        onPress={handlePressClear}
      >
        <Text>Clear</Text>
      </Pressable>
      <Pressable
        style={{
          marginHorizontal: 5,
          borderWidth: 2,
          borderColor: "#000",
          paddingHorizontal: 15,
          borderRadius: 8,
        }}
        onPress={handlePressLike}
      >
        <Text>Like</Text>
      </Pressable>
      <Pressable
        style={{
          marginHorizontal: 5,
          borderWidth: 2,
          borderColor: "#000",
          paddingHorizontal: 15,
          borderRadius: 8,
        }}
        onPress={handlePressDislike}
      >
        <Text>Dislike</Text>
      </Pressable>
    </View>
  );
};

export default observer(Actions);
