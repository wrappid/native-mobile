// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import moment from "moment";
import { SafeAreaProvider } from "react-native-safe-area-context";

// eslint-disable-next-line import/named
import { NativeInput } from "./NativeInput";
import { SCDatePicker } from "../../styledComponents/inputs/SCDatePicker";
import { SCInput } from "../../styledComponents/inputs/SCInput";
import { SCTimePicker } from "../../styledComponents/inputs/SCTimePicker";
import NativeBox from "../layouts/NativeBox";

export default function NativeDateTimePicker(props) {
  const {
    ampm,
    onChange,
    id,
    formik,
    value,
    // eslint-disable-next-line no-unused-vars
    label = "Pick Date Time",
    ...restProps
  } = props;

  const [date, setDate] = React.useState(
    value ? new Date(value.split(" ")[0]) : null
  );
  const [time, setTime] = React.useState(value ? value.split(" ")[1] : null);

  const hours = time ? time.split(":")[0] : null;
  const minutes = time ? time.split(":")[1] : null;

  const [openDate, setOpenDate] = React.useState(false);
  const [visibleTime, setVisibleTime] = React.useState(false);

  useEffect(() => {
    if (date && time) {
      formik?.setFieldValue(id, date + " " + time);
      if (onChange) {
        onChange(date + " " + time);
      }
    }
  }, [date, time]);

  const onDismissDate = React.useCallback(() => {
    setOpenDate(false);
  }, [setOpenDate]);

  const onConfirmDate = React.useCallback(
    (params) => {
      setOpenDate(false);
      setDate(params?.date ? moment(params.date).format("YYYY-MM-DD") : null);
      setVisibleTime(true);
    },
    [setOpenDate]
  );

  const onDismissTime = React.useCallback(() => {
    setVisibleTime(false);
  }, [setVisibleTime]);

  const onConfirmTime = React.useCallback(
    (params) => {
      setVisibleTime(false);
      setTime(params?.hours + ":" + params?.minutes);
    },
    [setVisibleTime]
  );

  return (
    <SafeAreaProvider>
      <NativeBox>
        <NativeInput
          onChange={onChange}
          value={
            date && hours && minutes ? date + " " + hours + ":" + minutes : null
          }
          right={
            <SCInput.Icon
              icon="calendar"
              onPress={() => {
                setOpenDate(true);
              }}
            />
          }
        />

        <SCDatePicker
          {...restProps}
          locale="en"
          mode="single"
          visible={openDate}
          onDismiss={onDismissDate}
          date={date}
          onConfirm={onConfirmDate}
        />

        <SCTimePicker
          {...restProps}
          visible={visibleTime}
          onDismiss={onDismissTime}
          onConfirm={onConfirmTime}
          hours={hours ? Number(hours) : 0}
          minutes={minutes ? Number(minutes) : 0}
          use24HourClock={ampm ? false : true}
        />
      </NativeBox>
    </SafeAreaProvider>
  );
}
