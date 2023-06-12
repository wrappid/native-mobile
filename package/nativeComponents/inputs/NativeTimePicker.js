import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NativeBox from "../layouts/NativeBox";
import { SCTimePicker } from "../../styledComponents/inputs/SCTimePicker";
import  NativeInput from "./NativeInput";
import { SCInput } from "../../styledComponents/inputs/SCInput";

export default function NativeTimePicker(props) {
  const { ampm, onChange, value, id, formik, ...restProps } = props;

  const [visible, setVisible] = React.useState(false);
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      formik?.setFieldValue(id, hours + ":" + minutes);
      onChange(hours + ":" + minutes);
    },
    [setVisible]
  );

  const hours = String(value) ? String(value).split(":")[0] : null;
  const minutes = String(value) ? String(value).split(":")[1] : null;

  return (
    <SafeAreaProvider>
      <NativeBox>
        <NativeInput
          onChange={onChange}
          value={hours && minutes ? hours + ":" + minutes : null}
          right={
            <SCInput.Icon
              icon="clock"
              onPress={() => {
                setVisible(true);
              }}
            />
          }
        />
        <SCTimePicker
          {...restProps}
          visible={visible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          hours={hours ? Number(hours) : 0}
          minutes={minutes ? Number(minutes) : 0}
          use24HourClock={ampm ? false : true}
        />
      </NativeBox>
    </SafeAreaProvider>
  );
}
