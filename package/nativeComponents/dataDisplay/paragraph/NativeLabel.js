import React from 'react';
import {variantMap} from '../../../helper/componentPropsUtils';
import {SCTypography} from '../../../dataDisplay/SCTypography';

export default function NativeLabel(props) {
  return <SCTypography {...props} variant={variantMap.caption} />;
}
