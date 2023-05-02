import React from "react";
import { SCSwitch } from "../../styledComponents/inputs/SCSwitch";

export default function NativeSwitch(props) {
  const {
    disabled,
    checked,
    defaultChecked = false,
    onChange,
    ...restProps
  } = props;
  /**
   * @todo
   * Swich value should be depends on checked and defaultCheck both the property
   */
  // const checkedValue = () => {
  //   if (checked === false) {
  //     return defaultChecked;
  //   } else {
  //     return checked;
  //   }
  // };

  return (
    <SCSwitch
      {...restProps}
      disabled={disabled}
      value={checked}
      onValueChange={onChange}
    >
      {restProps.children}
    </SCSwitch>
  );
}
