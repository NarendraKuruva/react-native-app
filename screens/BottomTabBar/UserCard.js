import { observer } from "mobx-react";
import React, { useContext } from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";

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
  const { name, firstName } = user;
  const usersStore = useContext(MyAppStoreContext);
  const isUserLiked = usersStore.isUserLiked(user.userId);

  const handlePress = () => {
    usersStore.toggleLikedUser(user.userId);
  };

  return (
    <View
      style={{
        backgroundColor: "#E0F2FE",
        width: "95%",
        height: 52,
        borderRadius: 8,
        padding: 8,
        marginBottom: 10,
        // marginLeft: 40,
        // marginRight: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: user.profilePicURL }}
        style={{ width: 50, height: 50 }}
      />
      <Text>{name}</Text>
      <TouchableOpacity onPress={handlePress}>
        {isUserLiked ? <DislikeIcon /> : <LikeIcon />}
      </TouchableOpacity>
    </View>
  );
});

export { UserCard };
