// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { isValidElement, cloneElement } from "react";

import { useTheme } from "react-native-paper";

import { SCButton } from "../../styledComponents/inputs/SCButton";

export default function NativeButton(props) {
  const {
    label,
    onClick,
    variant,
    innerRef,
    type,
    size = "small",
    disabled,
    startIcon,
    children,
    endIcon,
    // eslint-disable-next-line no-unused-vars
    ...restProps
  } = props;

  // -- console.log("btn OnClick", OnClick);

  const UserActionLogging = () => {};
  const theme = useTheme();
  const childrenWithProps = (childProps) => {
    let icon = endIcon ? endIcon : startIcon;

    if (isValidElement(icon)) {
      return cloneElement(icon, { style: childProps, ...(icon?.props || {}) });
    } else {
      // -- console.log("Not valid element");
    }
  };

  return (
    <SCButton
      type={type ? type : "button"}
      ref={innerRef}
      mode={variant ? variant : "contained"}
      size={size}
      disabled={disabled}
      style={variant === "outlined" && { borderColor: theme?.colors?.primary }}
      icon={(iconProps) =>
        startIcon || endIcon ? childrenWithProps(iconProps) : null
      }
      onPress={(ele) => {
        UserActionLogging();
        if (onClick && typeof onClick === "function") {
          onClick(ele);
        }
      }}
    >
      {label ? label : children ? children : "LABEL NOT PROVIDED"}
    </SCButton>
  );
}
