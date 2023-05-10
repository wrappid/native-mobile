import React from "react";
import { SCIcon } from "../../styledComponents/dataDisplay/SCIcon";

export const __IconTypes = {
  MATERIAL_ICON: "MATERIAL_ICON", // Default support of MUI
  MATERIAL_OUTLINED_ICON: "MATERIAL_OUTLINED_ICON",
  FONTAWESOME_V5_SOLID_ICON: "FONTAWESOME_V5_SOLID_ICON",
  FONTAWESOME_V5_REGULAR_ICON: "FONTAWESOME_V5_REGULAR_ICON",
  RXICON_V1_REGULAR_ICON: "RXICON_V1_REGULAR_ICON",
};

/**
 * - important notice
 * - children > props > options(local/db) > default
 *
 * @param {*} props
 * @returns
 */
export default function NativeIcon(props) {
  const { type, icon, options, sx, ...restProps } = props;

  const renderNativeIcon = () => {
    let tmpType = type || options?.type || __IconTypes.MATERIAL_ICON;
    let tmpIcon = props.children || icon || options?.icon || "";
    switch (tmpType) {
      case __IconTypes.RXICON_V1_REGULAR_ICON:
        return (
          <SCIcon
            sx={{ ...sx, overflow: "unset" }}
            baseClassName="rxi"
            name={tmpIcon}
            size={24}
            {...restProps}
          />
        );
      case __IconTypes.FONTAWESOME_V5_REGULAR_ICON:
        return (
          <SCIcon
            sx={{ ...sx, overflow: "unset" }}
            baseClassName="far"
            name={tmpIcon}
            size={24}
            {...restProps}
          />
        );
      case __IconTypes.FONTAWESOME_V5_SOLID_ICON:
        return (
          <SCIcon
            sx={{ ...sx, overflow: "unset" }}
            baseClassName="fas"
            name={tmpIcon}
            size={24}
            {...restProps}
          />
        );
      case __IconTypes.MATERIAL_OUTLINED_ICON:
        return (
          <SCIcon
            baseClassName="material-icons-outlined"
            sx={sx}
            size={24}
            name={tmpIcon}
            {...restProps}
          />
        );
      case __IconTypes.MATERIAL_ICON:
      default:
        return <SCIcon sx={sx} size={24} name={tmpIcon} {...restProps} />;
    }
  };

  return <>{renderNativeIcon()}</>;
}
