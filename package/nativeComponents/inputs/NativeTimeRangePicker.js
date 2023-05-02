import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NativeBox from "../layouts/NativeBox";
import { SCTimePicker } from "../../styledComponents/inputs/SCTimePicker";
import { NativeInput } from "./NativeInput";
import { SCInput } from "../../styledComponents/inputs/SCInput";

export default function NativeTimeRangePicker(props) {
  const {
    label = "Pick Time Range",
    ampm,
    onChange,
    value,
    id,
    formik,
    ...restProps
  } = props;

  const [visibleStart, setVisibleStart] = React.useState(false);
  const [visibleEnd, setVisibleEnd] = React.useState(false);

  const [startTime, setStartTime] = React.useState(value?.startTime);
  const [endTime, setEndTime] = React.useState(value?.endTime);

  const startHours = startTime ? startTime.split(":")[0] : null;
  const startMinutes = startTime ? startTime.split(":")[1] : null;

  const endHours = endTime ? endTime.split(":")[0] : null;
  const endMinutes = endTime ? endTime.split(":")[1] : null;

  useEffect(() => {
    if (startTime && endTime) {
      onChange({ startTime: startTime, endTime: endTime });
    }
  }, [startTime, endTime]);

  const onDismissStart = React.useCallback(() => {
    setVisibleStart(false);
  }, [setVisibleStart]);

  const onConfirmStart = React.useCallback(
    ({ hours, minutes }) => {
      setVisibleStart(false);
      formik?.setFieldValue(id, hours + ":" + minutes);
      if (onChange) {
        setStartTime(hours + ":" + minutes);
      }
      setVisibleEnd(true);
    },
    [setVisibleStart]
  );

  const onDismissEnd = React.useCallback(() => {
    setVisibleEnd(false);
  }, [setVisibleEnd]);

  const onConfirmEnd = React.useCallback(
    ({ hours, minutes }) => {
      setVisibleEnd(false);
      formik?.setFieldValue(id, hours + ":" + minutes);
      if (onChange) {
        setEndTime(hours + ":" + minutes);
      }
    },
    [setVisibleEnd]
  );

  return (
    <SafeAreaProvider>
      <NativeBox>
        <NativeInput
          onChange={onChange}
          value={
            startHours && startMinutes && endHours && endMinutes
              ? startHours +
                ":" +
                startMinutes +
                " - " +
                endHours +
                ":" +
                endMinutes
              : null
          }
          right={
            <SCInput.Icon
              icon="clock"
              onPress={() => {
                setVisibleStart(true);
              }}
            />
          }
        />
        <SCTimePicker
          {...restProps}
          label="Select Start Time"
          visible={visibleStart}
          onDismiss={onDismissStart}
          onConfirm={onConfirmStart}
          hours={startHours ? Number(startHours) : 0}
          minutes={startMinutes ? Number(startMinutes) : 0}
          use24HourClock={ampm ? false : true}
        />
        <SCTimePicker
          {...restProps}
          label="Select End Time"
          visible={visibleEnd}
          onDismiss={onDismissEnd}
          onConfirm={onConfirmEnd}
          hours={endHours ? Number(endHours) : 0}
          minutes={endMinutes ? Number(endMinutes) : 0}
          use24HourClock={ampm ? false : true}
        />
      </NativeBox>
    </SafeAreaProvider>
  );
}
