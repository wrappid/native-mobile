import React from 'react';
import {SCMenuList} from '../../inputs/SCMenuList';

export default function NativeMenuList(props) {
  return <SCMenuList {...props}>{props.children}</SCMenuList>;
}
