import React from "react";
import NewTab from "./NewTab";

interface NewTabsListProps {
  tabs: Array<{ title: string, value: string }>;
}

const NewTabsList = (props: NewTabsListProps): React.ReactElement => {
  const { tabs } = props;
  return (
    <>
      {tabs.map((tab, index) => {
        return <NewTab title={tab.title} value={tab.value} key={index} />;
      })}
    </>
  );
};

export default NewTabsList;
