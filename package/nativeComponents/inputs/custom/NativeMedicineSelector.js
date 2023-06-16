import React, { useState } from "react";
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
import NativeInput from "../NativeInput";
import NativeTextButton from "../NativeTextButton";
import NativeChip from "../../dataDisplay/NativeChip";
import NativeLabel from "../../dataDisplay/paragraph/NativeLabel";
import NativeTypographyBody1 from "../../dataDisplay/paragraph/NativeTypographyBody1";
import NativeBox from "../../layouts/NativeBox";
import { UtilityClasses } from "@wrappid/styles";
import NativeFlatList from "../../dataDisplay/NativeFlatList";

export default function NativeMedicineSelector(props) {
  const {
    components,
    customStyle,
    placeholder,
    onChange,
    isMulti,
    loadOptions,
    onKeyDown,
    defaultOptions,
    value,
    inputValue,
    onInputChange,
  } = props;

  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const [filtereredOptions, setFilteredOptions] = useState([]);

  const disableStatusBar = false;
  const disableStatusBarPadding = false;

  const animationTypeCalculated = Platform.select({
    web: "none",
    default: "slide",
  });

  const isLight = false;
  const headerBackgroundColor = theme?.colors?.onPrimary;

  console.log("NAIVE AUTO COMPLETE", props);

  const reloadOption = async (v) => {
    let ops = await loadOptions(v);
    setFilteredOptions(ops);
  };
  React.useEffect(() => {
    reloadOption(inputValue);
  }, [inputValue]);

  React.useEffect(async () => {
    reloadOption(inputValue);
  }, []);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const _onInputChange = async (_inputValue) => {
    reloadOption(_inputValue);
    onInputChange({}, v);
  };

  const renderMedicineOb = (data, index) => {
    return <NativeChip mode="flat">{data?.label}</NativeChip>;
  };

  const getKey = (data) => {
    return data?.id;
  };

  const renderMedicineOption = (option, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onChange([...value, option]);
          onClose();
        }}
      >
        {
          // components?.Option ? (
          //   components?.Option(option)
          // )
          // :
          <NativeTypographyBody1 style={{ padding: 10 }}>
            {option?.label}
          </NativeTypographyBody1>
        }
      </TouchableOpacity>
    );
  };

  const getKeyOption = (data) => {
    return data?.id;
  };

  const onEndReached = (page) => {};

  console.log("OPtions", filtereredOptions);

  return (
    <>
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
        <NativeLabel>Add Medicines</NativeLabel>
        {value && Array.isArray(value)
          ? value?.map((v) => renderMedicineOb(v))
          : null}
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

                <NativeInput
                  styleClasses={[UtilityClasses?.MARGIN?.MB4]}
                  value={inputValue}
                  handleChange={_onInputChange}
                />

                {/* Current medicine components */}

                <View>
                  <NativeFlatList
                    horizontal={true}
                    tableData={value}
                    renderItem={renderMedicineOb}
                    keyExtractor={getKey}
                  />
                </View>

                {/* All options like medicines */}
                {/* <View> */}
                <NativeFlatList
                  horizontal={false}
                  tableData={filtereredOptions}
                  renderItem={renderMedicineOption}
                  keyExtractor={getKeyOption}
                  onEndReached={onEndReached}
                />
                {/* </View> */}
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
