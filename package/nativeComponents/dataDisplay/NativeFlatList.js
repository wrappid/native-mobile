import React from "react";
import { SCFlatList } from "../../styledComponents/dataDisplay/SCFlatList";
import { NativeBox } from "../layouts/NativeBox";

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
    listRef,
    boundingBox,
  } = props;

  const flatList = () => {
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
        ref={listRef}
      />
    );
  };

  /**
   * @todo scroll view is used is page container should be reved when flatlist used
   * but this is causing children in pages being overlapped
   */

  return boundingBox ? (
    <NativeBox style={{ height: 600 }}>{flatList()}</NativeBox>
  ) : (
    flatList()
  );
}
