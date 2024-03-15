// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCIcon } from "../../styledComponents/dataDisplay/SCIcon";

/**
 * - important notice
 * - children > props > options(local/db) > default
 *
 * @param {*} props
 * @returns
 */

function iconFlavour(name) {
  if (name === "notifications_none_outlined") {
    name = "notifications-none";
    return name;
  }

  if (name === "male" || name === "female") {
    name = "gender-" + name;
    return name;
  }

  name = name?.includes("_") ? name.replace("_", "-") : name;

  name = name?.includes("-outlined")
    ? name.replace("-outlined", "-outline")
    : name;

  name = name?.includes("_outlined")
    ? name.replace("_outlined", "-outline")
    : name;

  name = name?.includes("-none") ? name.replace("-none", "") : name;
  name = name?.includes("-note") ? name.replace("-note", "") : name;

  name = name?.includes("fa-") ? name.replace("fa-", "") : name;

  return name;
}

export const DEFAULT_ICON_SIZE = 24;
export const sizeMap = {
  large : 64,
  medium: 48,
  small : DEFAULT_ICON_SIZE,
};

export default function NativeIcon(props) {
  const { type, name, styleClasses, size, style } = props;

  return (
    <SCIcon
      iconType={
        name === "male" || name === "female" || name === "sort"
          ? "material-community-icon"
          : type
      }
      name={iconFlavour(name)}
      size={isNaN(size) ? sizeMap[size] || DEFAULT_ICON_SIZE : size}
      styleClasses={styleClasses || []}
      style={style}
    />
  );
}
