import NativeFullModal from '../utils/NativeFullModal';
import React from 'react';

function NativeDataTableDetailsPaneContainer(props) {
  const {onClose, open, ...rest} = props;

  return (
    <NativeFullModal noClose={true} open={open} onClose={onClose} searchBox={false}>
      {props.children}
    </NativeFullModal>
  );
}

export default NativeDataTableDetailsPaneContainer;
