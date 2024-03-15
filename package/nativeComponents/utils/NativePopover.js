// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useEffect, useRef } from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { Animated } from "react-native";

import NativeIcon from "../dataDisplay/NativeIcon";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeBox from "../layouts/NativeBox";

export default function NativePopover(props) {
  // eslint-disable-next-line no-unused-vars
  const { open, onClose, ...restProps } = props;
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      duration       : 300,
      toValue        : 1,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // -- console.log("open", open);
  // -- console.log("restPorps", restProps);

  return (
    props.open && (
      <NativeBox
        styleClasses={[UtilityClasses?.DISPLAY?.FLEX, UtilityClasses?.POSITION?.FIXED_TOP]}
        // @todo should be removed if background color opacity support
        // can be given in styleclasses
        style={{
          alignItems     : "center",
          backgroundColor: "rgba(0,0,0,0.3)",
          height         : "100%",
          justifyContent : "center",
          zIndex         : 100,
        }}
      >
        <NativeBox
          style={{
            position: "absolute",
            top     : 200,
          }}
          styleClasses={[UtilityClasses?.DISPLAY?.FLEX, UtilityClasses?.OPACITY?.OPACITY_100, UtilityClasses?.WIDTH?.W_75]}
        >
          <Animated.View style={{ opacity: fadeAnim }}>
            <NativeBox
              style={{ borderRadius: 10, flex: 1, zIndex: 200 }}
              styleClasses={[UtilityClasses?.BG?.BG_WHITE, UtilityClasses?.PADDING?.PY2]}
            >
              <NativeBox
                styleClasses={[UtilityClasses.DISPLAY?.FLEX, UtilityClasses.ALIGNMENT?.ALIGN_ITEMS_END]}
              >
                <NativeIconButton onClick={() => onClose && onClose()}>
                  <NativeIcon name="close" type="material-icon">
                    close
                  </NativeIcon>
                </NativeIconButton>
              </NativeBox>

              {props.children}
            </NativeBox>
          </Animated.View>
        </NativeBox>
      </NativeBox>
    )
  );
}
