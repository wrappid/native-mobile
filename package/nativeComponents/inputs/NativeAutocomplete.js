import React from "react";
import {
  Modal,
  StyleSheet,
  useWindowDimensions,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useTheme } from "react-native-paper";
import NativeInput from "./NativeInput";
import NativeTextButton from "./NativeTextButton";
import NativeChip from "../dataDisplay/NativeChip";
import NativeLabel from "../dataDisplay/paragraph/NativeLabel";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import NativeBox from "../layouts/NativeBox";
import { nativeFilterOptions } from "@wrappid/styled-components";
import { UtilityClasses } from "@wrappid/styles";

function NativeAutocomplete(props) {
  const theme = useTheme();
  const dimensions = useWindowDimensions();

  const disableStatusBar = false;
  const disableStatusBarPadding = false;

  const {
    open,
    onOpen,
    onClose,
    options,
    renderOption,
    onInputChange,
    onChange,
    _inputValue,
    renderInput,
    value,
    multiple,
    getOptionLabel,
    _topLabel,
    ...rest
  } = props;
  const animationTypeCalculated = Platform.select({
    web: "none",
    default: "slide",
  });

  const isLight = false;
  const headerBackgroundColor = theme?.colors?.onPrimary;

  console.log("NAIVE AUTO COMPLETE", props);

  let [filtereredOptions, setFilteredOptions] = React.useState(options);
  React.useEffect(() => {
    if (options) {
      setFilteredOptions(
        nativeFilterOptions(options, {
          inputValue: _inputValue,
          getOptionLabel,
        })
      );
    }
  }, [_inputValue]);

  console.log("FILTER", filtereredOptions);
  return (
    <>
      {/* View like input element with text */}
      <TouchableOpacity
        style={{
          // height: 75,
          borderBottom: 1,
          borderStyle: "solid",
          borderBottomWidth: 0.5,
          paddingBottom: 5,
          paddingLeft: 10,
          marginBottom: 10,
        }}
        onPress={onOpen}
      >
        <NativeLabel>{_topLabel}</NativeLabel>
        {value ? (
          multiple && Array.isArray(value) ? (
            value?.map((v) => (
              <NativeChip mode="flat">{getOptionLabel(v)}</NativeChip>
            ))
          ) : (
            <NativeTypographyBody1 style={{ fontSize: 16 }}>
              {getOptionLabel(value)}
            </NativeTypographyBody1>
          )
        ) : renderInput ? (
          renderInput({ disabled: true, value: value })
        ) : null}
      </TouchableOpacity>

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

                {/* <NativeIconButton OnClick={onClose}>
                  <NativeIcon name="close" childrenFlag={true} />
                </NativeIconButton> */}

                <NativeInput
                  styleClasses={[UtilityClasses?.MARGIN?.MB4]}
                  value={_inputValue}
                  handleChange={(v) => onInputChange({}, v)}
                />
                <ScrollView>
                  {filtereredOptions?.map((option) =>
                    renderOption(
                      { OnClick: onChange, option, onClose },
                      option,
                      {}
                    )
                  )}
                </ScrollView>
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

export default React.memo(NativeAutocomplete);
