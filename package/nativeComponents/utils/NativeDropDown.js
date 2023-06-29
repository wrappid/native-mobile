import React from "react";
import { Menu, useTheme } from "react-native-paper";

export default function NativeDropDown(props) {
  const { visible, onDismiss, anchor } = props;
  const theme = useTheme();

  return (
    <Menu
      contentStyle={{ backgroundColor: theme.colors.background }}
      visible={visible}
      onDismiss={onDismiss}
      anchorPosition="bottom"
      anchor={anchor}
    >
      {props?.children}
    </Menu>
  );
}
