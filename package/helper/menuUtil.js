import React from "react";
import { CoreClasses } from "@wrappid/styles";
import NativeDivider from "../nativeComponents/dataDisplay/NativeDivider";
import NativeLink from "../nativeComponents/navigation/NativeLink";
import NativeListItemText from "../nativeComponents/dataDisplay/NativeListItemText";
import { TouchableOpacity } from "react-native";
import NativeMenuItem from "../nativeComponents/navigation/NativeMenuItem";

export default function getNativeMenuItem(
  menuItem,
  level,
  OnMenuClick,
  miniDrawer,
  open,
  selectedID,
  setSelectedID,
  locationPathname,
  theme,
  allTypes
) {
  // console.log("OPEN", open);
  /**
   * @todo review required for using core menu item instead of core List Item
   */
  return menuItem.type === allTypes?.MENU_SEPERATOR ? (
    <NativeDivider />
  ) : (
    <NativeLink
      href={
        menuItem?.type === allTypes?.MENU_ITEM && menuItem?.link
          ? menuItem?.link
          : ""
      }
    >
      <NativeMenuItem
        style={{
          paddingLeft: level * 8,
          backgroundColor:
            menuItem?.type === allTypes?.MENU_ITEM &&
            locationPathname === menuItem?.link &&
            theme.palette.secondary.light,
        }}
        onPress={(e) => {
          console.log(
            "CLICKING",
            menuItem?.type,
            menuItem?.link,
            allTypes?.MENU_ITEM,
            window.innerWidth
          );
          // setSelectedID(menuItem?.name);
          OnMenuClick(menuItem, true);
        }}
      >
        <NativeListItemText
          styleClasses={[
            CoreClasses.NAVIGATION.APP_DRAWER_TEXT,
            ...getTypeWiseStyle(menuItem, allTypes?.MENU_ITEM_TEXT, allTypes),
          ]}
        >
          {menuItem.label}
        </NativeListItemText>
      </NativeMenuItem>
    </NativeLink>
  );
}

function getTypeWiseStyle(item, elemType, allTypes) {
  var styles = [];
  const {
    MENU_PARENT_ITEM,
    MENU_ITEM_WRAPPER,
    MENU_ITEM_BUTTON,
    MENU_ITEM_ICON,
    MENU_ITEM_TEXT,
    MENU_HEADER_ITEM,
    MENU_SEPERATOR,
    MENU_ITEM,
  } = allTypes;
  switch (item.type) {
    case MENU_PARENT_ITEM:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(CoreClasses.MENU.PARENT_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(CoreClasses.MENU.PARENT_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(CoreClasses.MENU.PARENT_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(CoreClasses.MENU.PARENT_TEXT_ITEM);
      }
      break;
    case MENU_HEADER_ITEM:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(CoreClasses.MENU.HEADER_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(CoreClasses.MENU.HEADER_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(CoreClasses.MENU.HEADER_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(CoreClasses.MENU.HEADER_TEXT_ITEM);
      }
      break;
    case MENU_SEPERATOR:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(CoreClasses.MENU.SEPERATOR_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(CoreClasses.MENU.SEPERATOR_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(CoreClasses.MENU.SEPERATOR_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(CoreClasses.MENU.SEPERATOR_TEXT_ITEM);
      }
      break;
    case MENU_ITEM:
    default:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(CoreClasses.MENU.MENU_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(CoreClasses.MENU.MENU_ITEM_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(CoreClasses.MENU.MENU_ITEM_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(CoreClasses.MENU.MENU_ITEM_TEXT_ITEM);
      }
      break;
  }
  return styles;
}
