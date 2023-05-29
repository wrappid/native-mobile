import React from "react";
import { SCFlatList } from "../../styledComponents/dataDisplay/SCFlatList";
const END_REACH_THRESHOLD = 3;

export default function NativeFlatList(props) {
  const { tableData, query, renderItem, keyExtractor, onEndReached, page } =
    props;

  return (
    <SCFlatList
      renderItem={({ item, index }) => {
        return renderItem ? renderItem(item, index) : () => {};
      }}
      data={tableData}
      keyExtractor={keyExtractor}
      onEndReached={() => {
        onEndReached(page + 1);
      }}
      onEndReachedThreshold={END_REACH_THRESHOLD}
    />
  );
}
