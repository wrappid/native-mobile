import React from "react";
import { SCFlatList } from "../../styledComponents/dataDisplay/SCFlatList";
const END_REACH_THRESHOLD = 3;

export default function NativeFlatList(props) {
  const {
    tableData,
    query,
    renderItem,
    keyExtractor,
    onEndReached,
    page,
    horizontal,
  } = props;

  return (
    <SCFlatList
      renderItem={({ item, index }) => {
        return renderItem ? renderItem(item, index) : () => {};
      }}
      data={tableData}
      keyExtractor={keyExtractor}
      horizontal={horizontal}
      onEndReached={
        onEndReached
          ? () => {
              onEndReached(page + 1);
            }
          : null
      }
      onEndReachedThreshold={END_REACH_THRESHOLD}
    />
  );
}
