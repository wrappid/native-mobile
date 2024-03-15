// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import moment from "moment";
import { SafeAreaProvider } from "react-native-safe-area-context";

// eslint-disable-next-line import/named
import { NativeInput } from "./NativeInput";
import { SCDatePicker } from "../../styledComponents/inputs/SCDatePicker";
import { SCInput } from "../../styledComponents/inputs/SCInput";
import NativeBox from "../layouts/NativeBox";

export default function NativeDateRangepicker(props) {
  const { value, onChange, ...restProps } = props;

  const [range, setRange] = React.useState({
    endDate  : value?.endDate ? new Date(value.endDate) : undefined,
    startDate: value?.startDate ? new Date(value.startDate) : undefined,
  });
  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ endDate, startDate });
      onChange({
        endDate  : endDate ? moment(endDate).format("YYYY-MM-DD") : undefined,
        startDate: startDate
          ? moment(startDate).format("YYYY-MM-DD")
          : undefined,
      });
    },
    [setOpen, setRange]
  );

  return (
    <SafeAreaProvider>
      <NativeBox>
        <NativeInput
          onChange={onChange}
          value={
            range?.startDate && range?.endDate
              ? moment(range?.startDate).format("YYYY-MM-DD") +
                " to " +
                moment(range?.endDate).format("YYYY-MM-DD")
              : null
          }
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
          mode="range"
          visible={open}
          onDismiss={onDismiss}
          startDate={range.startDate}
          endDate={range.endDate}
          onConfirm={onConfirm}
        />
      </NativeBox>
    </SafeAreaProvider>
  );
}
