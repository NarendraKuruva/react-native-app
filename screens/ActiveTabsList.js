import React from "react";

import ActiveTab from "./ActiveTab";

const ActiveTabsList = (props): React.ReactElement => {
  const { tabs } = props;
  return (
    <>
      {tabs.map((tab, index) => {
        return (
          <ActiveTab
            title={tab.title}
            value={tab.value}
            imageUrl={tab.imageUrl}
            key={index}
          />
        );
      })}
    </>
  );
};

export default ActiveTabsList;
