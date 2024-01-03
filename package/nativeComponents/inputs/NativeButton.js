import React, { isValidElement, cloneElement } from "react";
import { SCButton } from "../../styledComponents/inputs/SCButton";
import { useTheme } from "react-native-paper";

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
    ...restProps
  } = props;

  const UserActionLogging = () => {
    // alert("BUTTON CLICK");
  };
  const theme = useTheme();
  const childrenWithProps = (childProps) => {
    let icon = endIcon ? endIcon : startIcon;
    if (isValidElement(icon)) {
      return cloneElement(icon, { style: childProps, ...(icon?.props || {}) });
    } else {
      console.log("Not valid element");
    }
  };

  return (
    <SCButton
      type={type ? type : "button"}
      ref={innerRef}
      mode={variant ? variant : "contained"}
      size={size}
      disabled={disabled}
      style={
        variant === "outlined" && {
          borderColor: theme?.colors?.primary,
        }
      }
      icon={(iconProps) =>
        startIcon || endIcon ? childrenWithProps(iconProps) : null
      }
      onPress={(e) => {
        UserActionLogging();
        if (onClick && typeof onClick === "function") {
          onClick(e);
        }
      }}
    >
      {label ? label : children ? children : "LABEL NOT PROVIDED"}
    </SCButton>
  );
}
