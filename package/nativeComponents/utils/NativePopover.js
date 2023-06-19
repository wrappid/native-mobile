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
        ]}
        // @todo should be removed if background color opacity support
        // can be given in styleclasses
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          zIndex: 100,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <NativeBox
          // style={{marginTop: 300, marginBottom: 320, marginLeft: 50}}
          style={{
            position: "absolute",
            top: 200,
          }}
          styleClasses={[
            UtilityClasses?.DISPLAY?.FLEX,
            UtilityClasses?.OPACITY?.OPACITY_100,
            UtilityClasses?.WIDTH?.W_75,
          ]}
        >
          <NativeBox
            style={{ flex: 1, zIndex: 200 }}
            styleClasses={[
              UtilityClasses?.BG?.BG_WHITE,
              UtilityClasses?.PADDING?.P3,
            ]}
          >
            <NativeBox
              style={{
                marginTop: -25,
              }}
              styleClasses={[
                UtilityClasses.DISPLAY?.FLEX,
                UtilityClasses.ALIGNMENT?.ALIGN_ITEMS_END,
              ]}
            >
              <NativeIconButton onClick={() => onClose && onClose()}>
                <NativeIcon name="close" type="material-icon">
                  close
                </NativeIcon>
              </NativeIconButton>
            </NativeBox>
            {props.children}
          </NativeBox>
        </NativeBox>
      </NativeBox>
    )
  );
}
