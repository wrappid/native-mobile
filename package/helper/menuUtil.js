// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { StyledComponentsClasses, UtilityClasses } from "@wrappid/styles";

import { isJson } from "../helper/stringUtils";
import NativeDivider from "../nativeComponents/dataDisplay/NativeDivider";
import NativeIcon from "../nativeComponents/dataDisplay/NativeIcon";
import NativeListItemIcon from "../nativeComponents/dataDisplay/NativeListItemIcon";
import NativeListItemText from "../nativeComponents/dataDisplay/NativeListItemText";
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
  // // -- console.log("OPEN", open);
  /**
   * @todo review required for using core menu item instead of core List Item
   */
  return menuItem.type === allTypes?.MENU_SEPERATOR ? (
    <NativeDivider />
  ) : (
    <NativeMenuItem
      style={{
        alignItems: "center",
        backgroundColor:
          menuItem?.type === allTypes?.MENU_ITEM &&
          locationPathname === menuItem?.link &&
          theme?.palette?.secondary?.light,
        flex         : 1,
        flexDirection: "row",
        flexWrap     : "nowrap",
        margin       : 5,
        paddingLeft  : level * 16,
      }}
      // eslint-disable-next-line no-unused-vars
      onPress={(ele) => {
        // -- console.log("CLICKING",menuItem?.type,menuItem?.link, allTypes?.MENU_ITEM, window.innerWidth);
        menuItem?.onClick ? menuItem?.onClick() : OnMenuClick(menuItem, true);
      }}
    >
      {menuItem.comp ? (
        typeof menuItem.comp === "function" ? (
          menuItem.propsApp ? (
            menuItem.comp(menuItem.propsApp)
          ) : menuItem.props ? (
            menuItem.comp(menuItem.props)
          ) : (
            menuItem.comp()
          )
        ) : (
          menuItem.comp
        )
      ) : (
        <NativeListItemIcon
          style={{
            flex       : 1,
            paddingLeft: 10,
          }}
          styleClasses={
            miniDrawer
              ? [
                StyledComponentsClasses.MENU.MINI_DRAWER_LIST_ITEM_ICON,
                ...getTypeWiseStyle(
                  menuItem,
                  allTypes?.MENU_ITEM_ICON,
                  allTypes
                ),
              ]
              : [
                StyledComponentsClasses.MENU.LIST_ITEM_ICON,
                ...getTypeWiseStyle(
                  menuItem,
                  allTypes?.MENU_ITEM_ICON,
                  allTypes
                ),
              ]
          }
        >
          {/* @todo may have to correct this */}
          <NativeIcon
            styleClasses={
              menuItem?.type === allTypes?.MENU_ITEM &&
              locationPathname === menuItem?.link
                ? [UtilityClasses?.COLOR?.TEXT_PRIMARY]
                : [UtilityClasses?.COLOR?.TEXT_SECONDARY_DARK]
            }
            name={
              typeof menuItem?.icon === "object"
                ? menuItem?.icon?.icon
                : typeof menuItem?.icon === "string" && isJson(menuItem?.icon)
                  ? JSON.parse(menuItem?.icon)?.icon
                  : menuItem?.icon
            }
            type={
              typeof menuItem?.icon === "object"
                ? menuItem?.icon?.type || "material-icons"
                : typeof menuItem?.icon === "string" && isJson(menuItem?.icon)
                  ? JSON.parse(menuItem?.icon)?.type
                  : "material-icons"
            }
            childrenFlag={
              typeof menuItem?.icon === "object"
                ? menuItem?.icon?.type == "material-icons" ||
                  menuItem?.icon?.type == "material-icons-outlined"
                : typeof menuItem?.icon === "string" && isJson(menuItem?.icon)
                  ? JSON.parse(menuItem?.icon)?.type == "material-icons" ||
                  JSON.parse(menuItem?.icon)?.type == "material-icons-outlined"
                  : true
            }
          />
        </NativeListItemIcon>
      )}

      <NativeListItemText
        style={{
          color:
            menuItem?.type === allTypes?.MENU_ITEM &&
            locationPathname === menuItem?.link
              ? theme?.palette?.primary?.main
              : theme?.palette?.secondary?.dark,
          flex: 5,
        }}
        styleClasses={[StyledComponentsClasses?.NAVIGATION?.APP_DRAWER_TEXT, ...getTypeWiseStyle(menuItem, allTypes?.MENU_ITEM_TEXT, allTypes)]}
      >
        {menuItem.label}
      </NativeListItemText>
    </NativeMenuItem>
  );
}

function getTypeWiseStyle(item, elemType, allTypes) {
  let styles = [];
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
        styles.push(StyledComponentsClasses.MENU.PARENT_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(StyledComponentsClasses.MENU.PARENT_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(StyledComponentsClasses.MENU.PARENT_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(StyledComponentsClasses.MENU.PARENT_TEXT_ITEM);
      }
      break;

    case MENU_HEADER_ITEM:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(StyledComponentsClasses.MENU.HEADER_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(StyledComponentsClasses.MENU.HEADER_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(StyledComponentsClasses.MENU.HEADER_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(StyledComponentsClasses.MENU.HEADER_TEXT_ITEM);
      }
      break;

    case MENU_SEPERATOR:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(StyledComponentsClasses.MENU.SEPERATOR_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(StyledComponentsClasses.MENU.SEPERATOR_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(StyledComponentsClasses.MENU.SEPERATOR_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(StyledComponentsClasses.MENU.SEPERATOR_TEXT_ITEM);
      }
      break;

    case MENU_ITEM:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM_TEXT_ITEM);
      }
      break;

    default:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM_TEXT_ITEM);
      }
      break;
  }
  return styles;
}
