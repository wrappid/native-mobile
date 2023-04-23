import React from 'react';
// import {getUUID} from '../../../utils/appUtils';
import {SCInput} from '../../inputs/SCInput';

export default function NativeInput(props) {
  // const {NativeId = getUUID()} = props;
  return (
    <SCInput
      id={props.id}
      label={props.label}
      type={props.type}
      styleClasses={[...(props.styleClasses || [])]}
      value={props.value || ''}
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
              console.log('CLICKED');
              props.onFormFocus(props.editId);
            }
          : () => {
              console.log('CLICKED else');
            }
      }
      {...props}
    />
    //   <NativeFormErrorText>{props.touched && props.error}</NativeFormErrorText>
    //   <NativeFormHelperText>{props.helperText}</NativeFormHelperText>
    // </NativeFormControl>
  );
}
