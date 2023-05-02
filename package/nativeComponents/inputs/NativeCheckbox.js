import React from "react";
import { SCCheckbox } from "../../styledComponents/inputs/SCCheckbox";

export default function NativeCheckbox(props) {
  const { id, styleClasses = [], formik, onChange, label, value } = props;

  const checked = formik ? value : props.checked;
  return (
    <SCCheckbox
      id={id}
      label={label}
      status={checked ? "checked" : "unchecked"}
      styleClasses={[...(styleClasses || [])]}
      onPress={
        onChange && !formik
          ? onChange
          : (v) => {
              formik?.setFieldValue(id, v.target.checked);
            }
      }
    />
  );
}
