import React from "react";
// import {getUUID} from '../../../utils/appUtils';
import { SCInput } from "../../styledComponents/inputs/SCInput";
import { TextInput } from "react-native-paper";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeIconButton from "./NativeIconButton";
import NativeDropDown from "../utils/NativeDropDown";

export default function NativeTextField(props) {
  // const {NativeId = getUUID()} = props;
  const endAdornment = props?.InputProps?.endAdornment;
  const { noAdornment } = props;
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  console.log("NATIVE TEXTFIELD", endAdornment?.props?.children);

  return (
    <SCInput
      id={props.id}
      label={props.label}
      type={props.type}
      styleClasses={[...(props.styleClasses || [])]}
      value={props.value || ""}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChange}
      required={props.formik ? false : props.required}
      placeholder={props.placeholder}
      disable={props.disabled || props.readOnly}
      max={props.max}
      min={props.min}
      readOnly={props.readOnly}
      onBlur={props?.formik?.handleBlur}
      inputProps={props.inputProps ? props.inputProps : {}}
      error={
        props.touched && props.error && props.error.length > 0 ? true : false
      }
      endAdornment={props.endAdornment ? props.endAdornment : null}
      multiline={props.multiline ? props.multiline : false}
      rows={props.rows}
      maxRows={props.maxRows}
      minRows={props.minRows}
      onFocus={
        props.onFormFocus && props.editId && props.readOnly
          ? () => {
              console.log("CLICKED");
              props.onFormFocus(props.editId);
            }
          : () => {
              console.log("CLICKED else");
            }
      }
      right={
        !noAdornment && endAdornment?.props?.children?.length > 0 ? (
          <TextInput.Icon
            icon={() =>
              endAdornment?.props?.children?.length > 1 ? (
                <NativeDropDown
                  visible={visible}
                  onDismiss={closeMenu}
                  anchorPosition="bottom"
                  anchor={
                    <NativeIconButton onClick={openMenu}>
                      <NativeIcon name="keyboard-arrow-down" />
                    </NativeIconButton>
                  }
                >
                  {endAdornment?.props?.children?.filter((elem) => elem)}
                </NativeDropDown>
              ) : (
                endAdornment?.props?.children
              )
            }
          />
        ) : null
      }
      {...props}
    />
    //   <NativeFormErrorText>{props.touched && props.error}</NativeFormErrorText>
    //   <NativeFormHelperText>{props.helperText}</NativeFormHelperText>
    // </NativeFormControl>
  );
}
