import React from 'react';
import {SCModal} from '../../utils/SCModal';

export default function NativeModal(props) {
  const {open, onClose, ...restProps} = props;

  return (
    <SCModal visible={open} onRequestClose={onClose} {...restProps}>
      {restProps.children}
    </SCModal>
  );
}
