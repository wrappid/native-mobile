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
import NativeInput from "./NativeInput";
import NativeTextButton from "./NativeTextButton";
import NativeChip from "../dataDisplay/NativeChip";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import NativeBox from "../layouts/NativeBox";
import NativeFlatList from "../dataDisplay/NativeFlatList";
import NativeTypographyBody2 from "../dataDisplay/paragraph/NativeTypographyBody2";
import { nativeFilterOptions } from "../../helper/helper";
import { UtilityClasses } from "@wrappid/styles";
import NativeGrid from "../layouts/NativeGrid";
import NativeLabel from "../dataDisplay/paragraph/NativeLabel";

function NativeAutocomplete(props) {
  const theme = useTheme();
  const dimensions = useWindowDimensions();

  const disableStatusBar = false;
  const disableStatusBarPadding = false;

  const {
    id,
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
    getOptionValue,
    _topLabel,
    _optionComp,
    readOnly,
    _editId,
    _onFormFocus,
    onFocus,
    _getEndAdornment,
    _formik,
    ...rest
  } = props;
  const animationTypeCalculated = Platform.select({
    web: "none",
    default: "slide",
  });

  const isLight = false;
  const headerBackgroundColor = theme?.colors?.onPrimary;

  console.log("NAIVE AUTO COMPLETE", props);

  let [filteredOptions, setFilteredOptions] = React.useState(options);
  React.useEffect(() => {
    if (options) {
      setFilteredOptions(
        nativeFilterOptions(options, {
          inputValue: _inputValue,
          getOptionLabel,
          getOptionValue,
          value,
        })
      );
    }
  }, [_inputValue]);

  React.useEffect(() => {
    if (options) {
      setFilteredOptions(
        nativeFilterOptions(options, {
          inputValue: _inputValue,
          getOptionLabel,
          getOptionValue,
          value,
        })
      );
    }
  }, [value]);

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

  console.log("FILTER", filteredOptions);
  return (
    <>
      {/* View like input element with text */}
      <TouchableOpacity
        style={getStyle()}
        disabled={readOnly ? (_onFormFocus && _editId ? false : true) : false}
        onPress={() => {
          onOpen();
          onFocus();
        }}
      >
        {value ? (
          <>
            {checkValue() ? (
              <NativeLabel>{_topLabel}</NativeLabel>
            ) : (
              <NativeTypographyBody2 style={{ fontSize: 16, marginBottom: 8 }}>
                {_topLabel}
              </NativeTypographyBody2>
            )}
            <NativeGrid>
              <NativeBox gridProps={{ gridSize: 10 }}>
                {multiple && Array.isArray(value) ? (
                  <NativeFlatList
                    tableData={value}
                    horizontal={true}
                    renderItem={(rowData, rowIndex) => {
                      return (
                        <NativeBox styleClasses={[UtilityClasses?.MARGIN?.MY1]}>
                          <NativeChip
                            mode="flat"
                            label={getOptionLabel(rowData)}
                            closeIcon="close-circle"
                            onClose={
                              readOnly
                                ? null
                                : multiple
                                ? () => {
                                    let v = value?.filter(
                                      (item, index) => index !== rowIndex
                                    );
                                    onChange({}, v);
                                  }
                                : () => {}
                            }
                          />
                        </NativeBox>
                      );
                    }}
                  />
                ) : (
                  <NativeTypographyBody1>
                    {getOptionLabel(value)}
                  </NativeTypographyBody1>
                )}
              </NativeBox>
              <NativeBox
                styleClasses={[
                  UtilityClasses.FLEX.DIRECTION_ROW,
                  UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_FLEX_END,
                ]}
                gridProps={{ gridSize: 2 }}
              >
                {_getEndAdornment()}
              </NativeBox>
            </NativeGrid>
          </>
        ) : renderInput ? (
          renderInput({ readOnly: true, value: value })
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
                  label="Search here"
                />
                <NativeFlatList
                  tableData={filteredOptions}
                  renderItem={(option, rowIndex) => {
                    return _optionComp ? (
                      <TouchableOpacity
                        onPress={() => {
                          onChange({}, option);
                          if (_formik) {
                            _formik.setFieldTouched(id, true, true);
                          }
                        }}
                      >
                        {renderOption(
                          {
                            OnClick: () => {
                              if (_formik) {
                                _formik.setFieldTouched(id, true, true);
                              }
                              onChange(
                                {},
                                multiple ? [...(value || []), option] : option
                              );
                            },
                            option,
                            onClose,
                          },
                          option,
                          {}
                        )}
                      </TouchableOpacity>
                    ) : (
                      renderOption(
                        {
                          OnClick: () => {
                            if (_formik) {
                              _formik.setFieldTouched(id, true, true);
                            }
                            let v = multiple
                              ? [...(value || []), option]
                              : option;
                            console.log("VALUE", v);
                            onChange({}, v);
                          },
                          option,
                          onClose,
                        },
                        option,
                        {}
                      )
                    );
                  }}
                />
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
