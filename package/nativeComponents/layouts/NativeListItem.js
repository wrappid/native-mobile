// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { SCListItem } from "../../styledComponents/layouts//SCListItem";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import NativeCard from "../surfaces/NativeCard";
import NativeCardContent from "../surfaces/NativeCardContent";

export default function NativeListItem(props) {
  return (
    <SCListItem
      {...props}
      onPress={(ele) => {
        if (props.OnClick) {
          props.OnClick(ele, props?.option);
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
