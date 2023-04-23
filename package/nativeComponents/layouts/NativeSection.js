import React from 'react';
import {SCSection} from '../../layouts/SCSection';

export default function NativeSection(props) {
  return <SCSection {...props}>{props.children}</SCSection>;
}
