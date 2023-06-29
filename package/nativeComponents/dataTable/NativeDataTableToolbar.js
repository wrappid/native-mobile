import React, { useState } from "react";
import NativeBox from "../layouts/NativeBox";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeIcon from "../dataDisplay/NativeIcon";
import { Menu } from "react-native-paper";
import { View } from "react-native";

export default function NativeDataTableToolbar(props) {
  const { allTools, styleClasses, menuRenderFunction } = props;

  const [open, setPopover] = useState(false);

  const onMore = () => {
    setPopover(!open);
  };

  const showStack = (stack) => {
    if (!stack.hideInApp) {
      if (menuRenderFunction) {
        let visibleItems = stack?.filter((element) => !element.hideInApp);
        return menuRenderFunction(visibleItems);
      } else {
        return stack?.map((element) =>
          element?.comp && !element.hideInApp
            ? typeof element?.comp === "function"
              ? element.comp(element.propsApp)
              : element.comp
            : null
        );
      }
    } else {
      return null;
    }
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
            row?.leftPanel?.stacks?.map((stack) => showStack(stack))}
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
                noNavigation={true}
                anchorPosition="bottom"
                anchor={
                  <NativeIconButton size="large" onClick={onMore}>
                    <NativeIcon name="more-vert" size={32} />
                  </NativeIconButton>
                }
              >
                {row?.rightPanel?.stacks?.map((stack) => showStack(stack))}
              </Menu>
            )}
        </View>
      )}
    </NativeBox>
  ));
}
