import React from 'react';
import {SCPopover} from '../../utils/SCPopover';

export default function NativePopover(props) {
  const {open, onClose, ...restProps} = props;

  console.log('open', open);
  console.log('restPorps', restProps);

  return (
    <SCPopover
      visible={open}
      onDismiss={() => {
        onClose;
      }}
      {...restProps}>
      {restProps.children}
    </SCPopover>
  );
}
