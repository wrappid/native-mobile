import React from 'react';
import {SCBox} from '../../layouts/SCBox';
import NativeTypography from '../dataDisplay/NativeTypography';

export default function NativeSpan(props) {
  return (
    <SCBox {...props} component="span">
      <NativeTypography>{props.children}</NativeTypography>
    </SCBox>
  );
}
