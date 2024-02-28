import { SCCheckbox } from "../../styledComponents/inputs/SCCheckbox";

export default function NativeCheckbox(props) {
  const {
    id,
    styleClasses = [],
    formik,
    onChange,
    label,
    value,
    disabled,
    ...restProps
  } = props;

  const checked = formik ? value : props.checked;

  return (
    <SCCheckbox
      {...restProps}
      id={id}
      label={label}
      status={checked ? "checked" : "unchecked"}
      disabled={disabled}
      styleClasses={[...(styleClasses || [])]}
      onPress={
        onChange && !formik
          ? onChange
          : (val) => {
            formik?.setFieldValue(id, val.target.checked);
          }
      }
    />
  );
}
