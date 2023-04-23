import React from 'react';
import {variantMap} from '../../helper/componentPropsUtils';
import {SCTypography} from '../../dataDisplay/SCTypography';

export default function NativeTypography(props) {
  //Do not use this directly use NativeParagraph
  return (
    <SCTypography
      {...props}
      component={props.component}
      variant={variantMap[props.variant]}>
      {props.children}
    </SCTypography>
  );
}
