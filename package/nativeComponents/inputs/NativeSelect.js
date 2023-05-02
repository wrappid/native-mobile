import React, { useState } from "react";
import { SCSelect } from "../../styledComponents/inputs/SCSelect";

export default function NativeSelect(props) {
  const { value, options, onChange, ...restProps } = props;

  const [showDropDown, setShowDropDown] = useState(false);

  const handleChange = (localValue) => {
    if (onChange) {
      onChange(localValue);
    }
  };

  return (
    <SCSelect
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={value}
      setValue={handleChange}
      list={options}
      {...restProps}
    />
  );
}
