import React from "react";
import { FlashList } from "@shopify/flash-list";
import { UserCard } from "../BottomTabBar/UserCard";
import { observer } from "mobx-react";
import { UserModel } from "../../stores/UserModel";

interface Props {
  users: UserModel[];
}

const MyList = observer((props: Props) => {
  const { users } = props;
  const renderItem = item => (
    <UserCard user={item.item} key={item.item.userId} />
  );

  return (
    <FlashList
      data={users}
      renderItem={renderItem}
      estimatedItemSize={200}
      numColumns={1}
    />
  );
});

export { MyList };
