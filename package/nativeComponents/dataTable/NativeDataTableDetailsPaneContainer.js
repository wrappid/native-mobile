import React from "react";
import {
  Modal,
  StyleSheet,
  useWindowDimensions,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";

import { useTheme } from "react-native-paper";
import NativeTextButton from "../inputs/NativeTextButton";
import NativeBox from "../layouts/NativeBox";
import { UtilityClasses } from "@wrappid/styles";

function NativeDataTableDetailsPaneContainer(props) {
  const theme = useTheme();
  const dimensions = useWindowDimensions();

  const disableStatusBar = false;
  const disableStatusBarPadding = false;

  const { onClose, open, ...rest } = props;
  const animationTypeCalculated = Platform.select({
    web: "none",
    default: "slide",
  });

  const isLight = false;
  const headerBackgroundColor = theme?.colors?.onPrimary;

  return (
    <>
      {/* View full screen modal for fields */}
      <NativeBox style={[StyleSheet.absoluteFill]} pointerEvents="box-none">
        <Modal
          animationType={animationTypeCalculated}
          transparent={true}
          visible={open}
          onRequestClose={onClose}
          presentationStyle="overFullScreen"
          supportedOrientations={supportedOrientations}
          //@ts-ignore
          statusBarTranslucent={true}
        >
          <>
            <NativeBox
              style={[StyleSheet.absoluteFill, styles.modalRoot]}
              pointerEvents="box-none"
            >
              <NativeBox
                styleClasses={[UtilityClasses?.PADDING?.P1]}
                style={[
                  styles.modalContent,
                  { backgroundColor: theme.colors.surface },
                  dimensions.width > 650 ? styles.modalContentBig : null,
                ]}
              >
                {disableStatusBar ? null : (
                  <StatusBar
                    translucent={true}
                    barStyle={isLight ? "dark-content" : "light-content"}
                  />
                )}
                {disableStatusBarPadding ? null : (
                  <NativeBox
                    style={[
                      {
                        height: StatusBar.currentHeight,
                        backgroundColor: headerBackgroundColor,
                      },
                    ]}
                  />
                )}
                <NativeTextButton label={"Close"} OnClick={onClose} />
                <ScrollView>{props.children}</ScrollView>
              </NativeBox>
            </NativeBox>
          </>
        </Modal>
      </NativeBox>
    </>
  );
}
const supportedOrientations = [
  "portrait",
  "portrait-upside-down",
  "landscape",
  "landscape-left",
  "landscape-right",
];

const styles = StyleSheet.create({
  modalRoot: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  modalBackground: {
    flex: 1,
  },
  modalContent: {
    flex: 1,
    width: "100%",
  },
  modalContentBig: {
    maxWidth: 600,
    maxHeight: 800,
    borderRadius: 10,
    width: "100%",
    overflow: "hidden",
  },
});

export default React.memo(NativeDataTableDetailsPaneContainer);
