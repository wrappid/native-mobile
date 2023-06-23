import React from "react";
import NativeTab from "./NativeTab";
import NativeTabs from "./NativeTabs";
import NativeFlatList from "../dataDisplay/NativeFlatList";

export default function NativeTabHead(props) {
  const { tabsContent, handleChange, tabValue, tabRef } = props;

  const renderItem = (tabContent, tabIndex) => {
    return (
      <NativeTab
        onClick={handleChange}
        value={tabContent?.id}
        label={tabContent?.label}
        tabIndex={tabIndex}
        tabRef={tabRef}
        currentTab={tabValue}
        key={tabContent?.id ? "tabContent-" + tabContent?.id : tabIndex}
      />
    );
  };

  const keyExtractor = (rowData) => {
    return rowData.id;
  };

  return (
    <NativeTabs styleClasses={props?.styleClasses ? props.styleClasses : []}>
      <NativeFlatList
        tableData={tabsContent}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={true}
        listRef={tabRef}
      />
    </NativeTabs>
  );
}
