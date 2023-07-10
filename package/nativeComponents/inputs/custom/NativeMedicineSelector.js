import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import NativeChip from "../../dataDisplay/NativeChip";
import NativeTypographyBody1 from "../../dataDisplay/paragraph/NativeTypographyBody1";
import NativeFlatList from "../../dataDisplay/NativeFlatList";
import NativeFullModal from "../../utils/NativeFullModal";
import NativeBox from "../../layouts/NativeBox";
import NativeIconButton from "../../inputs/NativeIconButton";
import NativeIcon from "../../dataDisplay/NativeIcon";
import NativeGrid from "../../layouts/NativeGrid";
import { UtilityClasses } from "@wrappid/styles";
import { CoreClasses } from "@wrappid/core";

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
    onFinalAddMed,
    getMedicineMask,
  } = props;

  const [filtereredOptions, setFilteredOptions] = useState([]);
  const [open, setOpen] = useState([]);

  console.log("NAIVE AUTO COMPLETE", props);

  React.useEffect(() => {
    reloadOption(inputValue);
  }, []);

  React.useEffect(() => {
    reloadOption(inputValue);
  }, [inputValue, value]);

  const reloadOption = async (v) => {
    let ops = await loadOptions(v);
    setFilteredOptions(ops);
  };

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const _onInputChange = async (_inputValue) => {
    reloadOption(_inputValue);
    onInputChange(_inputValue);
  };

  const renderMedicineOb = (data, index) => {
    return (
      <NativeBox
        styleClasses={[CoreClasses?.MARGIN?.MR1, CoreClasses?.MARGIN?.MY1]}
      >
        <NativeChip
          label={data.label}
          closeIcon="close-circle"
          onClose={() => {
            let items = value?.filter((v, i) => i !== index);
            onChange(items);
          }}
        />
      </NativeBox>
    );
  };

  const getKey = (data) => {
    return data?.id;
  };

  const renderMedicineOption = (option, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onChange([...value, option]);
        }}
      >
        {
          // components?.Option ? (
          //   components?.Option(option)
          // )
          // :
          <NativeTypographyBody1 styleClasses={[UtilityClasses.PADDING.P1]}>
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

  const viewInput = () => {
    if (value && Array.isArray(value)) {
      return (
        <NativeFlatList
          tableData={value}
          renderItem={renderMedicineOb}
          horizontal={true}
        />
      );
    } else {
      return null;
    }
  };

  const addMed = () => {
    onFinalAddMed();
    onClose();
  };

  console.log("OPtions", filtereredOptions, value);

  return (
    <NativeFullModal
      label="Add medicine"
      onOpen={onOpen}
      onClose={onClose}
      open={open}
      _onInputChange={_onInputChange}
      inputValue={inputValue}
      viewInput={viewInput}
      multiple={true}
      value={value}
    >
      {/* Current medicine components */}

      <NativeGrid>
        <NativeBox gridProps={{ gridSize: 10 }}>
          <NativeFlatList
            horizontal={true}
            tableData={value}
            renderItem={renderMedicineOb}
            keyExtractor={getKey}
          />
        </NativeBox>
        {value && Array.isArray(value) && value.length == 7 && (
          <NativeBox
            styleClasses={[UtilityClasses.FLEX.DIRECTION_ROW]}
            gridProps={{ gridSize: 2 }}
          >
            <NativeIconButton onClick={addMed} size="medium">
              <NativeIcon name="check_circle" />
            </NativeIconButton>
          </NativeBox>
        )}
      </NativeGrid>
      {getMedicineMask()}

      {/* All options like medicines */}
      {/* <NativeBox> */}
      {filtereredOptions && (
        <NativeFlatList
          horizontal={false}
          tableData={filtereredOptions}
          renderItem={renderMedicineOption}
          keyExtractor={getKeyOption}
          onEndReached={onEndReached}
        />
      )}
      {/* </NativeBox> */}
    </NativeFullModal>
  );
}
