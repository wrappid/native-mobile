// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import moment from "moment";
import { SafeAreaProvider } from "react-native-safe-area-context";

import NativeInput from "./NativeInput";
import { SCDatePicker } from "../../styledComponents/inputs/SCDatePicker";
import { SCInput } from "../../styledComponents/inputs/SCInput";
import NativeBox from "../layouts/NativeBox";

export default function NativeDatepicker(props) {
  const {
    id, formik, label, onChange, value, ...restProps 
  } = props;

  const [date, setDate] = React.useState(undefined);
  const [dateString, setDateString] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params?.date);
    },
    [setOpen, setDate]
  );

  useEffect(() => {
    if (date) {
      let dateS = moment(date).format("YYYY-MM-DD");

      setDateString(dateS);
      if (formik) {
        formik?.setFieldValue(id, dateS);
      } else if (onChange) {
        onChange(date);
      }
    }
  }, [date]);

  useEffect(() => {
    if (value) {
      setDateString(value);
      setDate(new Date(value));
    }
  }, []);

  return (
    <SafeAreaProvider>
      <NativeBox>
        <NativeInput
          onChange={onChange}
          label={label}
          disabled
          value={dateString}
          right={
            <SCInput.Icon
              icon="calendar"
              onPress={() => {
                setOpen(true);
              }}
            />
          }
        />

        <SCDatePicker
          {...restProps}
          locale="en"
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
      </NativeBox>
    </SafeAreaProvider>
  );
}
