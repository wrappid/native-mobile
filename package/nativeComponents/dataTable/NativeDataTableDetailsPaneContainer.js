import NativeFullModal from '../../nativeComponents/utils/NativeFullModal';
import React from 'react';

function NativeDataTableDetailsPaneContainer(props) {
  const {onClose, open, ...rest} = props;

  return (
    <NativeFullModal open={open} onClose={onClose} searchBox={false}>
      {props.children}
    </NativeFullModal>
  );
}

export default React.memo(NativeDataTableDetailsPaneContainer);
