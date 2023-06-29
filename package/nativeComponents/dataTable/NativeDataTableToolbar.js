import React, { useState } from "react";
import NativeBox from "../layouts/NativeBox";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeIcon from "../dataDisplay/NativeIcon";
import { Menu } from "react-native-paper";
import { View } from "react-native";

export default function NativeDataTableToolbar(props) {
  const { allTools, styleClasses } = props;

  const [open, setPopover] = useState(false);

  const onMore = () => {
    setPopover(!open);
  };

  return allTools?.map((row) => (
    <NativeBox
      styleClasses={styleClasses}
      style={{ flex: 1, flexDirection: "row" }}
    >
      {!row.hideInApp && (
        <NativeBox style={{ flex: 5, flexDirection: "row" }}>
          {row?.leftPanel &&
            !row?.leftPanel?.hideInApp &&
            row?.leftPanel?.stacks &&
            row?.leftPanel?.stacks?.map(
              (stack) =>
                !stack.hideInApp &&
                stack?.map((element) =>
                  element?.comp && !element.hideInApp
                    ? typeof element?.comp === "function"
                      ? element.comp(element.propsApp)
                      : element.comp
                    : null
                )
            )}
        </NativeBox>
      )}

      {!row.hideInApp && (
        <View style={{ flex: 1, flexDirection: "row" }}>
          {row?.rightPanel &&
            !row?.rightPanel?.hideInApp &&
            row?.rightPanel?.stacks && (
              <Menu
                visible={open}
                onDismiss={onMore}
                anchor={
                  <NativeIconButton size="small" onClick={onMore}>
                    <NativeIcon name="more-vert" size="small" />
                  </NativeIconButton>
                }
              >
                {row?.rightPanel?.stacks?.map(
                  (stack) =>
                    !stack.hideInApp &&
                    stack?.map((element) =>
                      element?.comp && !element.hideInApp
                        ? typeof element?.comp === "function"
                          ? element.comp(element.propsApp)
                          : element.comp
                        : null
                    )
                )}
              </Menu>
            )}
        </View>
      )}
    </NativeBox>
  ));
}
