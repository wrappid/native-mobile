import React from "react";
import { SCIcon } from "../../styledComponents/dataDisplay/SCIcon";

/**
 * - important notice
 * - children > props > options(local/db) > default
 *
 * @param {*} props
 * @returns
 */
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
      name={name}
      size={isNaN(size) ? sizeMap[size] || DEFAULT_ICON_SIZE : size}
      styleClasses={styleClasses || []}
    />
  );
}
