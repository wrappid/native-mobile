import { useCallback, useEffect, useState } from "react";

// eslint-disable-next-line import/no-unresolved
import moment from "moment";
import { SafeAreaProvider } from "react-native-safe-area-context";

// eslint-disable-next-line import/named
import { NativeInput } from "./NativeInput";
import { SCDatePicker } from "../../styledComponents/inputs/SCDatePicker";
import { SCInput } from "../../styledComponents/inputs/SCInput";
import { SCTimePicker } from "../../styledComponents/inputs/SCTimePicker";
import NativeBox from "../layouts/NativeBox";

export default function NativeDateTimeRangePicker(props) {
  const {
    value,
    // eslint-disable-next-line no-unused-vars
    label = "Pick Date Time Range",
    onChange,
    id,
    formik,
    ampm,
    ...restProps
  } = props;

  const [startDate, setStartDate] = useState(
    value?.startDate ? new Date(value.startDate.split(" ")[0]) : null
  );
  const [startTime, setStartTime] = useState(
    value?.startDate ? new Date(value.startDate.split(" ")[1]) : null
  );
  const [endDate, setEndDate] = useState(
    value?.endDate ? new Date(value.endDate.split(" ")[0]) : null
  );
  const [endTime, setEndTime] = useState(
    value?.endDate ? new Date(value.endDate.split(" ")[1]) : null
  );

  const startHours = startTime ? startTime.split(":")[0] : null;
  const startMinutes = startTime ? startTime.split(":")[1] : null;

  const endHours = endTime ? endTime.split(":")[0] : null;
  const endMinutes = endTime ? endTime.split(":")[1] : null;

  const [visibleStartDate, setVisibleStartDate] = useState(false);
  const [visibleStartTime, setVisibleStartTime] = useState(false);

  const [visibleEndDate, setVisibleEndDate] = useState(false);
  const [visibleEndTime, setVisibleEndTime] = useState(false);

  useEffect(() => {
    if (startDate && startTime && endDate && endTime) {
      formik?.setFieldValue(id, {
        endDate  : endDate + " " + endTime,
        startDate: startDate + " " + startTime,
      });
      if (onChange) {
        onChange({
          endDate  : endDate + " " + endTime,
          startDate: startDate + " " + startTime,
        });
      }
    }
  }, [startDate, startTime, endDate, endTime]);

  const onDismissStartDate = useCallback(() => {
    setVisibleStartDate(false);
  }, [setVisibleStartDate]);

  const onConfirmStartDate = useCallback(
    (params) => {
      setVisibleStartDate(false);
      setStartDate(
        params?.date ? moment(params.date).format("YYYY-MM-DD") : null
      );
      setVisibleStartTime(true);
    },
    [setVisibleStartDate]
  );

  const onDismissStartTime = useCallback(() => {
    setVisibleStartTime(false);
  }, [setVisibleStartTime]);

  const onConfirmStartTime = useCallback(
    (params) => {
      setVisibleStartTime(false);
      setStartTime(params?.hours + ":" + params?.minutes);
      setVisibleEndDate(true);
    },
    [setVisibleStartTime]
  );

  const onDismissEndDate = useCallback(() => {
    setVisibleEndDate(false);
  }, [setVisibleEndDate]);

  const onConfirmEndDate = useCallback(
    (params) => {
      setVisibleEndDate(false);
      setEndDate(
        params?.date ? moment(params.date).format("YYYY-MM-DD") : null
      );
      setVisibleEndTime(true);
    },
    [setVisibleEndDate]
  );

  const onDismissEndTime = useCallback(() => {
    setVisibleEndTime(false);
  }, [setVisibleEndTime]);

  const onConfirmEndTime = useCallback(
    (params) => {
      setVisibleEndTime(false);
      setEndTime(params?.hours + ":" + params?.minutes);
    },
    [setVisibleEndTime]
  );

  return (
    <SafeAreaProvider>
      <NativeBox>
        <NativeInput
          onChange={onChange}
          value={
            startDate && endDate && startTime && endTime
              ? startDate + " " + startTime + " - " + endDate + " " + endTime
              : null
          }
          right={
            <SCInput.Icon
              icon="calendar"
              onPress={() => {
                setVisibleStartDate(true);
              }}
            />
          }
        />

        <SCDatePicker
          label="Start Date"
          {...restProps}
          locale="en"
          mode="single"
          visible={visibleStartDate}
          onDismiss={onDismissStartDate}
          date={startDate}
          onConfirm={onConfirmStartDate}
        />

        <SCTimePicker
          label="Start Time"
          {...restProps}
          visible={visibleStartTime}
          onDismiss={onDismissStartTime}
          onConfirm={onConfirmStartTime}
          hours={startHours ? Number(startHours) : 0}
          minutes={startMinutes ? Number(startMinutes) : 0}
          use24HourClock={ampm ? false : true}
        />

        <SCDatePicker
          label="End Date"
          {...restProps}
          locale="en"
          mode="single"
          visible={visibleEndDate}
          onDismiss={onDismissEndDate}
          date={endDate}
          onConfirm={onConfirmEndDate}
        />

        <SCTimePicker
          label="End Time"
          {...restProps}
          visible={visibleEndTime}
          onDismiss={onDismissEndTime}
          onConfirm={onConfirmEndTime}
          hours={endHours ? Number(endHours) : 0}
          minutes={endMinutes ? Number(endMinutes) : 0}
          use24HourClock={ampm ? false : true}
        />
      </NativeBox>
    </SafeAreaProvider>
  );
}
