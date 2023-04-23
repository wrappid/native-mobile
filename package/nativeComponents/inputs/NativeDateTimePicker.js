import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NativeBox from '../layouts/NativeBox';
import {SCInput} from '../../inputs/SCInput';
import {SCDatePicker} from '../../inputs/SCDatePicker';
import {SCTimePicker} from '../../inputs/SCTimePicker';

import moment from 'moment';
import {NativeInput} from './NativeInput';

export default function NativeDateTimePicker(props) {
  const {
    ampm,
    onChange,
    id,
    formik,
    value,
    label = 'Pick Date Time',
    ...restProps
  } = props;

  const [date, setDate] = React.useState(
    value ? new Date(value.split(' ')[0]) : null,
  );
  const [time, setTime] = React.useState(value ? value.split(' ')[1] : null);

  const hours = time ? time.split(':')[0] : null;
  const minutes = time ? time.split(':')[1] : null;

  const [openDate, setOpenDate] = React.useState(false);
  const [visibleTime, setVisibleTime] = React.useState(false);

  useEffect(() => {
    if (date && time) {
      formik?.setFieldValue(id, date + ' ' + time);
      if (onChange) {
        onChange(date + ' ' + time);
      }
    }
  }, [date, time]);

  const onDismissDate = React.useCallback(() => {
    setOpenDate(false);
  }, [setOpenDate]);

  const onConfirmDate = React.useCallback(
    params => {
      setOpenDate(false);
      setDate(params?.date ? moment(params.date).format('YYYY-MM-DD') : null);
      setVisibleTime(true);
    },
    [setOpenDate],
  );

  const onDismissTime = React.useCallback(() => {
    setVisibleTime(false);
  }, [setVisibleTime]);

  const onConfirmTime = React.useCallback(
    params => {
      setVisibleTime(false);
      //   formik?.setFieldValue(id, hours + ':' + minutes);
      //   onChange(hours + ':' + minutes);
      setTime(params?.hours + ':' + params?.minutes);
    },
    [setVisibleTime],
  );

  return (
    <SafeAreaProvider>
      <NativeBox>
        <NativeInput
          onChange={onChange}
          value={
            date && hours && minutes ? date + ' ' + hours + ':' + minutes : null
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
