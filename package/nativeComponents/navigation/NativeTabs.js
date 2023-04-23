import React from 'react';
import {SCTabs} from '../../navigation/SCTabs';
import NativeBox from '../layouts/NativeBox';
import {CoreClasses} from '@wrappid/styles';

export default function NativeTabs(props) {
  return (
    <NativeBox styleClasses={[CoreClasses.HEIGHT.H_25]}>
      <SCTabs>{props.children}</SCTabs>
    </NativeBox>
  );
}
