// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import NativeFullModal from "../utils/NativeFullModal";

function NativeDataTableDetailsPaneContainer(props) {
  // eslint-disable-next-line no-unused-vars
  const { onClose, open, ...rest } = props;

  return (
    <NativeFullModal
      noClose={true}
      open={open}
      onClose={onClose}
      searchBox={false}
    >
      {props.children}
    </NativeFullModal>
  );
}

export default NativeDataTableDetailsPaneContainer;
