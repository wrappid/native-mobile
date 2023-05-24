import React from "react";
import { SCListItem } from "../../styledComponents/layouts//SCListItem";

import NativeCard from "../surfaces/NativeCard";
import NativeCardContent from "../surfaces/NativeCardContent";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";

export default function NativeListItem(props) {
  return (
    <SCListItem
      {...props}
      onPress={(e) => {
        // console.log('LLLLLLLLLLL', props, e, props.option);
        if (props.OnClick) {
          props.OnClick(e, props?.option);
          props.onClose && props.onClose();
        }
      }}
    >
      <NativeCard>
        <NativeCardContent>
          <NativeTypographyBody1>{props.children}</NativeTypographyBody1>
        </NativeCardContent>
      </NativeCard>
    </SCListItem>
  );
}
