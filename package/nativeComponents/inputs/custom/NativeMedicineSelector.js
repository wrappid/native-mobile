import React, {useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import NativeChip from '../../dataDisplay/NativeChip';
import NativeTypographyBody1 from '../../dataDisplay/paragraph/NativeTypographyBody1';
import NativeFlatList from '../../dataDisplay/NativeFlatList';
import NativeFullModal from '../../utils/NativeFullModal';
import NativeBox from '../../layouts/NativeBox';
import {UtilityClasses} from '@wrappid/styles';
import {CoreClasses} from '@wrappid/core';

export default function NativeMedicineSelector(props) {
  const {
    onChange,
    loadOptions,
    value,
    inputValue,
    onInputChange,
    onFinalAddMed,
    getMedicineMask,
  } = props;

  const [filtereredOptions, setFilteredOptions] = useState([]);
  const [open, setOpen] = useState([]);
  const scrollRef = useRef(null);

  React.useEffect(() => {
    reloadOption(inputValue);
  }, []);

  React.useEffect(() => {
    reloadOption(inputValue);
  }, [inputValue]);

  React.useEffect(() => {
    reloadOption(inputValue);
    if (scrollRef?.current) {
      try {
        scrollRef?.current?.scrollToEnd({
          animated: true,
        });
      } catch (err) {
        console.log('Not scrolling');
      }
    }
    if (value?.length === 7) {
      addMed();
    }
  }, [value]);

  const reloadOption = async v => {
    let ops = await loadOptions(v);
    setFilteredOptions(ops);
  };

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const _onInputChange = async _inputValue => {
    reloadOption(_inputValue);
    onInputChange(_inputValue);
  };

  const renderMedicineOb = (data, index) => {
    return (
      <NativeBox
        styleClasses={[CoreClasses?.MARGIN?.MR1, CoreClasses?.MARGIN?.MY1]}>
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

  const getKey = data => {
    return data?.id;
  };

  const renderMedicineOption = (option, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          let newValue = [...value, option];
          onChange(newValue);
        }}>
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

  const getKeyOption = data => {
    return data?.id;
  };

  const onEndReached = page => {};

  const viewInput = () => {
    if (value && Array.isArray(value)) {
      return (
        <NativeFlatList
          tableData={value}
          renderItem={renderMedicineOb}
          horiz77ontal={true}
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
      value={value}>
      {/* Current medicine components */}

      <NativeBox>
        <NativeFlatList
          horizontal={true}
          tableData={value}
          renderItem={renderMedicineOb}
          keyExtractor={getKey}
          listRef={scrollRef}
        />
      </NativeBox>
      {getMedicineMask()}

      {/* All options like medicines */}
      {filtereredOptions && (
        <NativeFlatList
          horizontal={false}
          tableData={filtereredOptions}
          renderItem={renderMedicineOption}
          keyExtractor={getKeyOption}
          onEndReached={onEndReached}
        />
      )}
    </NativeFullModal>
  );
}
