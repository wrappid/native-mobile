import React from 'react';
import {SCSkeleton} from '../../feedback/SCSkeleton';
import NativeTypographyBody1 from '../dataDisplay/paragraph/NativeTypographyBody1';

export default function NativeSkeleton(props) {
  return <SCSkeleton {...props} >
      <NativeTypographyBody1>LOADING...</NativeTypographyBody1>
  </SCSkeleton>;
}
