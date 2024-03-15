// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
// eslint-disable-next-line import/no-unresolved
import moment from "moment";

import NativeFormHelperText from "./NativeFormHelperText";
import NativeIconButton from "./NativeIconButton";
import NativeTimePicker from "./NativeTimePicker";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeLabel from "../dataDisplay/paragraph/NativeLabel";
import NativeBox from "../layouts/NativeBox";
import NativeGrid from "../layouts/NativeGrid";

export default function NativeMultiTimeRangePicker(props) {
  const { label, value, formik } = props;
  const [timeRanges, setTimeRanges] = React.useState([
    {
      endTime  : null,
      startTime: null,
    },
  ]);

  React.useEffect(() => {
    if (value && Array.isArray(value)) {
      setTimeRanges(value);
    }
  }, []);

  const addRange = () => {
    let timeRangesArr = [...timeRanges];

    timeRangesArr.push({
      endTime  : null,
      startTime: null,
    });
    setTimeRanges(timeRangesArr);
  };

  const deleteRange = (index) => {
    let timeRangesArr = [...timeRanges];
    let val = timeRangesArr
      .slice(0, index)
      .concat(timeRangesArr.slice(index + 1));

    setTimeRanges(val);
  };

  const _handleChange = (index, event, type) => {
    let timeRangesArr = [...timeRanges];

    timeRangesArr[index][type] = event.format("LLL");
    formik.setFieldValue(props.id, timeRangesArr);
  };

  // // -- console.log("END VALUE", id, spValue, value);

  return (
    <NativeBox>
      <NativeLabel>{label}</NativeLabel>

      {timeRanges.map((timeRange, index) => (
        <NativeGrid key={`timeRange-${index}`}>
          <NativeTimePicker
            readOnly={props.readOnly}
            gridProps={{ gridSize: 5 }}
            label={props.startTimeLabel ? props.startTimeLabel : "Start Time"}
            inputFormat={props.ampm ? "hh:mm" : "HH:MM"}
            ampm={props.ampm ? true : false}
            value={timeRange.startTime ? moment(timeRange.startTime) : null}
            onChange={(event) => {
              _handleChange(index, event, "startTime");
            }}
            touched={props.touched}
            error={props.error}
          />

          <NativeTimePicker
            readOnly={props.readOnly}
            gridProps={{ gridSize: 5 }}
            label={props.endTimeLabel ? props.endTimeLabel : "End Time"}
            inputFormat={props.ampm ? "hh:mm" : "HH:MM"}
            ampm={props.ampm ? true : false}
            value={timeRange.endTime ? moment(timeRange.endTime) : null}
            onChange={(event) => {
              _handleChange(index, event, "endTime");
            }}
            touched={props.touched}
            error={props.error}
          />

          {index < 1 ? (
            <NativeIconButton gridProps={{ gridSize: 2 }} onClick={addRange}>
              <NativeIcon>add</NativeIcon>
            </NativeIconButton>
          ) : (
            <NativeIconButton
              gridProps={{ gridSize: 2 }}
              onClick={() => {
                deleteRange(index);
              }}
            >
              <NativeIcon>delete_outline</NativeIcon>
            </NativeIconButton>
          )}
        </NativeGrid>
      ))}

      <NativeFormHelperText styleClasses={[UtilityClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </NativeFormHelperText>
    </NativeBox>
  );
}
