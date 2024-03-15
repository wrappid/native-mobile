// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
import {
  Modal,
  StyleSheet,
  useWindowDimensions,
  Platform,
  TouchableOpacity
  // eslint-disable-next-line import/namespace
} from "react-native";
import { useTheme } from "react-native-paper";

import NativeIconButton from "./NativeIconButton";
import NativeInput from "./NativeInput";
import { nativeFilterOptions } from "../../helper/helper";
import NativeChip from "../dataDisplay/NativeChip";
import NativeFlatList from "../dataDisplay/NativeFlatList";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeLabel from "../dataDisplay/paragraph/NativeLabel";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import NativeTypographyBody2 from "../dataDisplay/paragraph/NativeTypographyBody2";
import NativeBox from "../layouts/NativeBox";
import NativeGrid from "../layouts/NativeGrid";

function NativeAutocomplete(props) {
  const theme = useTheme();
  const dimensions = useWindowDimensions();

  // eslint-disable-next-line no-unused-vars
  const disableStatusBar = false;
  // eslint-disable-next-line no-unused-vars
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
    loading,
    freeSolo,
    _missMatch,
    // eslint-disable-next-line no-unused-vars
    ...rest
  } = props;
  const animationTypeCalculated = Platform.select({
    default: "slide",
    web    : "none",
  });

  let [filteredOptions, setFilteredOptions] = React.useState(options);

  useEffect(() => {
    if (options) {
      let filteredOps = nativeFilterOptions(options, {
        getOptionLabel,
        getOptionValue,
        inputValue: _inputValue,
        value,
      });

      setFilteredOptions(filteredOps);
    } else {
      // -- console.log("NO options found mount", options);
    }
  }, [options]);

  useEffect(() => {
    if (options) {
      let filteredOps = nativeFilterOptions(options, {
        getOptionLabel,
        getOptionValue,
        inputValue: _inputValue,
        value,
      });

      setFilteredOptions(filteredOps);
    } else {
      // -- console.log("NO options found input change", filteredOps);
    }
  }, [_inputValue]);

  useEffect(() => {
    if (options) {
      let filteredOps = nativeFilterOptions(options, {
        getOptionLabel,
        getOptionValue,
        inputValue: _inputValue,
        value,
      });

      setFilteredOptions(filteredOps);
    } else {
      // -- console.log("NO options found value change", options);
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
      borderBottom     : 1,
      borderBottomWidth: 0.5,
      borderStyle      : "solid",
      marginBottom     : 10,
    };
    const withValueStyle = { ...commonStyle };
    const withoutValueStyle = {
      ...commonStyle,
      marginBottom : 10,
      paddingBottom: 5,
    };

    if (checkValue()) {
      return withValueStyle;
    } else if (multiple) {
      return withoutValueStyle;
    } else {
      return { marginBottom: 16 };
    }
  };

  // -- console.log("NATIVE ASYNC SELECT", props);
  return (
    <>
      {/* View like input element with text */}
      <TouchableOpacity
        style={getStyle()}
        disabled={
          readOnly || loading ? (_onFormFocus && _editId ? false : true) : false
        }
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
                                    let val = value?.filter(
                                      (item, index) => index !== rowIndex
                                    );

                                    onChange({}, val);
                                  }
                                  : () => {}
                            }
                          />
                        </NativeBox>
                      );
                    }}
                  />
                ) : freeSolo && !loading && _missMatch ? (
                  <NativeTypographyBody1>
                    {getOptionLabel(value)}{" "}

                    <NativeIcon
                      name="info"
                      type="material-icons"
                      childrenFlag={true}
                      size={16}
                      styleClasses={[UtilityClasses?.COLOR?.TEXT_WARNING]}
                    />
                  </NativeTypographyBody1>
                ) : (
                  <NativeTypographyBody1>
                    {getOptionLabel(value)}
                  </NativeTypographyBody1>
                )}
              </NativeBox>

              <NativeBox
                styleClasses={[UtilityClasses.FLEX.DIRECTION_ROW, UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_FLEX_END]}
                gridProps={{ gridSize: 2 }}
              >
                {_getEndAdornment()}
              </NativeBox>
            </NativeGrid>
          </>
        ) : renderInput ? (
          renderInput({ noAdornment: true, readOnly: true, value: value })
        ) : null}
      </TouchableOpacity>

      {loading && <NativeLabel>Loading...</NativeLabel>}

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
                style={[styles.modalContent, { backgroundColor: theme.colors.surface }, dimensions.width > 650 ? styles.modalContentBig : null]}
              >
                <NativeBox style={{ alignItems: "flex-end" }}>
                  <NativeIconButton onClick={onClose}>
                    <NativeIcon
                      iconType="material-icons"
                      name="close"
                      childrenFlag={true}
                    />
                  </NativeIconButton>
                </NativeBox>

                <NativeInput
                  styleClasses={[UtilityClasses?.MARGIN?.MB4]}
                  value={_inputValue}
                  handleChange={(val) => onInputChange({}, val)}
                  label="Search here"
                />

                <NativeFlatList
                  tableData={filteredOptions}
                  // eslint-disable-next-line no-unused-vars
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
                            onClose,
                            option,
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
                            let val = multiple
                              ? [...(value || []), option]
                              : option;

                            // -- console.log("VALUE", v);
                            onChange({}, val);
                          },
                          onClose,
                          option,
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
  modalBackground: { flex: 1 },
  modalContent   : {
    flex : 1,
    width: "100%",
  },
  modalContentBig: {
    borderRadius: 10,
    maxHeight   : 800,
    maxWidth    : 600,
    overflow    : "hidden",
    width       : "100%",
  },
  modalRoot: {
    alignItems    : "center",
    flex          : 1,
    justifyContent: "center",
    top           : 110,
  },
});

export default React.memo(NativeAutocomplete);
