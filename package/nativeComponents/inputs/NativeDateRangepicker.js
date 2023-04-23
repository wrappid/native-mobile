import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NativeBox from '../layouts/NativeBox';
import {SCDatePicker} from '../../inputs/SCDatePicker';
import moment from 'moment';
import {NativeInput} from './NativeInput';
import {SCInput} from '../../inputs/SCInput';

export default function NativeDateRangepicker(props) {
  const {value, onChange, ...restProps} = props;

  const [range, setRange] = React.useState({
    startDate: value?.startDate ? new Date(value.startDate) : undefined,
    endDate: value?.endDate ? new Date(value.endDate) : undefined,
  });
  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    ({startDate, endDate}) => {
      setOpen(false);
      setRange({startDate, endDate});
      onChange({
        startDate: startDate
          ? moment(startDate).format('YYYY-MM-DD')
          : undefined,
        endDate: endDate ? moment(endDate).format('YYYY-MM-DD') : undefined,
      });
    },
    [setOpen, setRange],
  );

  return (
    <SafeAreaProvider>
      <NativeBox>
        <NativeInput
          onChange={onChange}
          value={
            range?.startDate && range?.endDate
              ? moment(range?.startDate).format('YYYY-MM-DD') +
                ' to ' +
                moment(range?.endDate).format('YYYY-MM-DD')
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
