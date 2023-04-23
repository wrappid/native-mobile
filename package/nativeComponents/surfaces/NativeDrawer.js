import React from 'react';
import {SCDrawer} from '../../navigation/SCDrawer';

export default function NativeDrawer(props) {
  return <SCDrawer {...props}>{props.children}</SCDrawer>;
}
