// eslint-disable-next-line import/namespace
import { TouchableOpacity } from "react-native";

import { SCInput } from "../../styledComponents/inputs/SCInput";

export default function NativeInput(props) {
  // const {NativeId = getUUID()} = props;
  // -- console.log("NATIVE INPUT PROPS", props);
  const typeMap = {
    email : "email",
    number: "numeric",
    phone : "tel",
    text  : "text",
  };

  const inputComponent = (
    <SCInput
      id={props.id}
      label={props.label}
      type={props.type}
      styleClasses={[...(props.styleClasses || [])]}
      value={props.value ? String(props.value) : ""}
      secureTextEntry={props.secureTextEntry}
      onChangeText={text => {
        props.formik
          ? props.formik.setFieldValue(props.id, text)
          : props.handleChange(text);
      }}
      required={props.formik ? false : props.required}
      placeholder={props.placeholder}
      disable={props.disabled}
      max={props.max}
      min={props.min}
      onBlur={props?.formik?.handleBlur}
      error={
        props.touched && props.error && props.error.length > 0 ? true : false
      }
      multiline={props.multiline ? props.multiline : false}
      rows={props.rows}
      maxRows={props.maxRows}
      minRows={props.minRows}
      onFocus={
        props.onFormFocus && props.editId && props.readOnly
          ? () => {
            // -- console.log("CLICKED");
            props.onFormFocus(props.editId);
          }
          : () => {
            // -- console.log("CLICKED else");
          }
      }
      readOnly={props.readOnly}
      keyboardType={typeMap[props.type]}
      right={props?.right || props.endAdornment}
      style={{ ...(props.style || {}), paddingHorizontal: 0 }}
    />
  );

  return props.onFormFocus && props.editId && props.readOnly ? (
    <TouchableOpacity
      onPress={() => {
        props.onFormFocus(props.editId);
      }}>
      {inputComponent}
    </TouchableOpacity>
  ) : (
    inputComponent
  );
}
