// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCSwitch } from "../../styledComponents/inputs/SCSwitch";

export default function NativeSwitch(props) {
  const {
    disabled,
    checked,
    // eslint-disable-next-line no-unused-vars
    defaultChecked = false,
    onChange,
    ...restProps
  } = props;

  /**
   * @todo
   * Swich value should be depends on checked and defaultCheck both the property
   */
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
