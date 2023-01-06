import { observer } from "mobx-react";
import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { UserModel } from "../../MyApp/stores/UserModel";
import HeartIcon from "../../MyApp/icons/HeartIcon";
import { MyAppStoreContext } from "../../MyApp/index.context";
import DislikeIcon from "../../MyApp/icons/DislikeIcon";
import LikeIcon from "../../MyApp/icons/LikeIcon";

interface Props {
  user: UserModel;
}

const UserCard = observer((props: Props) => {
  const user = props.user;
  const myStore = useContext(MyAppStoreContext);
  const { name, firstName } = user;

  const usersStore = useContext(MyAppStoreContext);

  const isUserLiked = usersStore.isUserLiked(user.userId);

  const handlePressLike = () => {
    usersStore.toggleLikedUser(user.userId);
  };

  const handleOnPress = () => {
    if (myStore.isBulkEditEnabled) {
      myStore.toggleBulkEditItem(user.userId);
    }
  };

  const handleLongPress = () => {
    myStore.toggleBulkEditItem(user.userId);
  };

  const isBulkEditEnabled = myStore.isBulkEditItem(user.userId);

  return (
    <Pressable onPress={handleOnPress} onLongPress={handleLongPress}>
      <View
        style={{
          backgroundColor: "#E0F2FE",
          width: "95%",
          height: 52,
          borderRadius: 8,
          padding: 8,
          marginBottom: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: isBulkEditEnabled ? 3 : 0,
          borderColor: isBulkEditEnabled ? "#BAE3FF" : "",
        }}
      >
        <Image
          source={{ uri: user.profilePicURL }}
          style={{ width: 45, height: 45 }}
        />
        <Text>{name}</Text>
        <TouchableOpacity onPress={handlePressLike}>
          {isUserLiked ? <DislikeIcon /> : <LikeIcon />}
        </TouchableOpacity>
      </View>
    </Pressable>
  );
});

export { UserCard };
