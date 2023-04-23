import React from 'react';
import {SCFormGroup} from '@wrappid/styled-components/inputs/SCFormGroup';

export default function NativeFormGroup(props) {
  return <SCFormGroup {...props}>{props.children}</SCFormGroup>;
}
