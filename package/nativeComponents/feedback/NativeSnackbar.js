/* eslint-disable no-unused-vars */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { Snackbar } from "react-native-paper";

import { SCSnackbar } from "../../styledComponents/feedback/SCSnackbar";

function barDuration(autoHideDuration) {
  if (autoHideDuration <= 4000) {
    return Snackbar.DURATION_SHORT;
  } else if(autoHideDuration <= 7000){
    return Snackbar.DURATION_MEDIUM;
  } else {
    return Snackbar.DURATION_LONG;
  }
}

export default function NativeSnackbar(props) {
  const { open, children, autoHideDuration, onClose, ...restProps } = props;
  // eslint-disable-next-line etc/no-commented-out-code
  // const duration = nativeDuration(autoHideDuration);

  return <SCSnackbar
    visible={open}
    duration={barDuration(autoHideDuration)}
    onDismiss={onClose}
    {...restProps}>{children}</SCSnackbar>;
}
