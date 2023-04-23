import React from 'react';
import {SCToolbar} from '../../surfaces/SCToolbar';

export default function NativeToolbar(props) {
  return <SCToolbar {...props}>{props.children}</SCToolbar>;
}
