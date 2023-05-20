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

  name = name?.includes("_") ? name.replace("_", "-") : name;

  name = name?.includes("-outlined")
    ? name.replace("-outlined", "-outline")
    : name;

  name = name?.includes("_outlined")
    ? name.replace("_outlined", "-outline")
    : name;

  name = name?.includes("-none") ? name.replace("-none", "") : name;
  name = name?.includes("-note") ? name.replace("-note", "") : name;

  return name;
}

export default function NativeIcon(props) {
  const { type, name, styleClasses, size } = props;

  const sizeMap = {
    small: 32,
    large: 64,
    medium: 128,
  };
  const DEFAULT_ICON_SIZE = 24;

  return (
    <SCIcon
      iconType={type}
      name={iconFlavour(name)}
      size={isNaN(size) ? sizeMap[size] || DEFAULT_ICON_SIZE : size}
      styleClasses={styleClasses || []}
    />
  );
}
