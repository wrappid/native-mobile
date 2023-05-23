import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SCDatePicker } from "../../styledComponents/inputs/SCDatePicker";
import NativeBox from "../layouts/NativeBox";
import moment from "moment";
import NativeInput from "./NativeInput";
import { SCInput } from "../../styledComponents/inputs/SCInput";

export default function NativeDatepicker(props) {
  const { id, formik, onChange, value, ...restProps } = props;

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
