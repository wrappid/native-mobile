import React from "react";
import { useSelector } from "react-redux";
import { SCRightDrawer } from "../../styledComponents/navigation/SCRightDrawer";
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
