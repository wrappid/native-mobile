import React from "react";
import {
  Modal,
  StyleSheet,
  useWindowDimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "react-native-paper";
import NativeInput from "../inputs/NativeInput";
import NativeTextButton from "../inputs/NativeTextButton";
import NativeLabel from "../dataDisplay/paragraph/NativeLabel";
import NativeBox from "../layouts/NativeBox";
import { UtilityClasses } from "@wrappid/styles";
import NativeTypographyBody2 from "@wrappid/styled-components/nativeComponents/dataDisplay/paragraph/NativeTypographyBody2";

export default function NativeFullModal(props) {
  const {
    label,
    onOpen,
    onClose,
    inputValue,
    _onInputChange,
    viewInput,
    searchBox,
    open,
    onFocus,
    multiple,
    value,
  } = props;

  const theme = useTheme();
  const dimensions = useWindowDimensions();

  const disableStatusBar = false;
  const disableStatusBarPadding = false;

  const animationTypeCalculated = Platform.select({
    web: "none",
    default: "slide",
  });

  const isLight = false;
  const headerBackgroundColor = theme?.colors?.onPrimary;

  const checkValue = () => {
    if (multiple) {
      if (value && Array.isArray(value) && value.length > 0) {
        return true;
      } else {
        return false;
      }
    } else if (value) {
      return true;
    } else {
      return false;
    }
  };

  const getStyle = () => {
    const commonStyle = {
      borderBottom: 1,
      borderStyle: "solid",
      borderBottomWidth: 0.5,
      marginBottom: 10,
    };
    const withValueStyle = { ...commonStyle };
    const withoutValueStyle = {
      ...commonStyle,
      paddingBottom: 5,
      paddingLeft: 16,
      marginBottom: 10,
    };
    if (checkValue()) {
      return withValueStyle;
    } else if (multiple) {
      return withoutValueStyle;
    } else {
      return { marginBottom: 16 };
    }
  };

  return (
    <>
      {viewInput && (
        <TouchableOpacity
          style={getStyle()}
          onPress={() => {
            if (onOpen) onOpen();
            if (onFocus) onFocus();
          }}
        >
          {checkValue() ? (
            <NativeLabel>{label}</NativeLabel>
          ) : (
            <NativeTypographyBody2 style={{ fontSize: 16, marginBottom: 8 }}>
              {label}
            </NativeTypographyBody2>
          )}
          {viewInput()}
        </TouchableOpacity>
      )}
      <NativeBox style={[StyleSheet.absoluteFill]} pointerEvents="box-none">
        <Modal
          animationType={animationTypeCalculated}
          transparent={true}
          visible={open}
          onRequestClose={onClose}
          presentationStyle="overFullScreen"
          supportedOrientations={supportedOrientations}
          statusBarTranslucent={true}
        >
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

              {searchBox !== false && (
                <NativeInput
                  styleClasses={[UtilityClasses?.MARGIN?.MB4]}
                  value={inputValue}
                  handleChange={_onInputChange}
                />
              )}
              {props.children}
            </NativeBox>
          </NativeBox>
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
