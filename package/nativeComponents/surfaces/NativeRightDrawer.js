// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { useSelector } from "react-redux";

import { SCRightDrawer } from "../../styledComponents/navigation/SCRightDrawer";
import NativeFullModal from "../utils/NativeFullModal";

export default function NativeRightDrawer(props) {
  const rightMenuOpen = useSelector((state) => state?.menu?.rightMenuOpen);

  return (
    <NativeFullModal
      open={rightMenuOpen}
      onOpen={props.onOpen}
      onClose={props.onClose}
      searchBox={false}
    >
      <SCRightDrawer open={rightMenuOpen} {...props}>
        {props.children}
      </SCRightDrawer>
    </NativeFullModal>
  );
}
