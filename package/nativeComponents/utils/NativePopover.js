import React from "react";
import NativeBox from "../layouts/NativeBox";
import NativeIcon from "../dataDisplay/NativeIcon";
import { UtilityClasses } from "@wrappid/styles";
import { NativeIconButton } from "@wrappid/styled-components";

export default function NativePopover(props) {
  const { open, onClose, ...restProps } = props;

  console.log("open", open);
  console.log("restPorps", restProps);

  return (
    props.open && (
      <NativeBox
        styleClasses={[
          UtilityClasses?.DISPLAY?.FLEX,
          UtilityClasses?.POSITION?.FIXED_TOP,
          UtilityClasses?.POSITION?.FIXED_BOTTOM,
        ]}
        // @todo should be removed if background color opacity support
        // can be given in styleclasses
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <NativeBox
          style={{marginTop: 300, marginBottom: 320, marginLeft: 50 }}
          styleClasses={[
            UtilityClasses?.DISPLAY?.FLEX,
            UtilityClasses?.OPACITY?.OPACITY_100,
            UtilityClasses?.WIDTH?.W_75,
          ]}
        >
          <NativeBox
            styleClasses={[
              UtilityClasses?.ALIGNMENT?.ALIGN_ITEMS_END,
              UtilityClasses?.MARGIN?.MB4,
            ]}
          >
            <NativeIconButton onClick={() => onClose && onClose()}>
              <NativeIcon name="close" type="material-icon">
                close
              </NativeIcon>
            </NativeIconButton>
          </NativeBox>
          <NativeBox
            styleClasses={[
              UtilityClasses?.BG?.BG_WHITE,
              UtilityClasses?.PADDING?.P3,
            ]}
          >
            {props.children}
          </NativeBox>
        </NativeBox>
      </NativeBox>
    )
  );
}
