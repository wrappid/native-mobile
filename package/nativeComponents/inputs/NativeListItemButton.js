import React from 'react';
import {SCListItemButton} from '../../inputs/SCListItemButton';

export default function NativeListItemButton(props) {
  const {OnClick, ...restProps} = props;
  return (
    <SCListItemButton onPress={OnClick} {...restProps}>
      {restProps.children}
    </SCListItemButton>
  );
}
