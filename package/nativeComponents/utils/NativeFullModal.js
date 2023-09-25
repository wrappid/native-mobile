import React, {useEffect, useState} from 'react';
import {
  Modal,
  StyleSheet,
  useWindowDimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import NativeInput from '../inputs/NativeInput';
import NativeLabel from '../dataDisplay/paragraph/NativeLabel';
import NativeBox from '../layouts/NativeBox';
import {UtilityClasses} from '@wrappid/styles';
import NativeTypographyBody2 from '../dataDisplay/paragraph/NativeTypographyBody2';
import {NativeIcon, NativeIconButton} from '@wrappid/native';

export default function NativeFullModal(props) {
  const {
    label,
    onOpen,
    onClose,
    noClose,
    inputValue,
    _onInputChange,
    viewInput,
    searchBox,
    open,
    onFocus,
    multiple,
    value,
    searchLabel,
    styleClasses,
    top,
  } = props;

  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const animationTypeCalculated = Platform.select({
    web: 'none',
    default: 'slide',
  });

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
      borderStyle: 'solid',
      borderBottomWidth: 0.5,
      marginBottom: 10,
    };
    const withValueStyle = {...commonStyle};
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
      return {marginBottom: 16};
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
          }}>
          {checkValue() ? (
            <NativeLabel>{label}</NativeLabel>
          ) : (
            <NativeTypographyBody2 style={{fontSize: 16, marginBottom: 8}}>
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
          statusBarTranslucent={true}>
          <NativeBox
            styleClasses={styleClasses}
            style={
              top
                ? [StyleSheet.absoluteFill, styles.modalRoot, {top}]
                : [StyleSheet.absoluteFill, styles.modalRoot]
            }
            pointerEvents="box-none">
            <NativeBox
              styleClasses={[
                UtilityClasses?.PADDING?.P1,
                ...(styleClasses || []),
              ]}
              style={
                !styleClasses
                  ? [
                      styles.modalContent,
                      {backgroundColor: theme.colors.surface},
                      dimensions.width > 650 ? styles.modalContentBig : null,
                    ]
                  : [
                      styles.modalContent,
                      dimensions.width > 650 ? styles.modalContentBig : null,
                    ]
              }>
              {!noClose && (
                <NativeBox style={{alignItems: 'flex-end'}}>
                  <NativeIconButton onClick={onClose}>
                    <NativeIcon
                      iconType="material-icons"
                      name="close"
                      childrenFlag={true}
                    />
                  </NativeIconButton>
                </NativeBox>
              )}

              {searchBox !== false && (
                <NativeInput
                  styleClasses={[UtilityClasses?.MARGIN?.MB4]}
                  value={inputValue}
                  handleChange={_onInputChange}
                  label={searchLabel || 'Search here'}
                />
              )}
              <ScrollView>
                <KeyboardAvoidingView
                  behavior={keyboardStatus ? 'padding' : ''}>
                  {props.children}
                </KeyboardAvoidingView>
              </ScrollView>
            </NativeBox>
          </NativeBox>
        </Modal>
      </NativeBox>
    </>
  );
}

const supportedOrientations = [
  'portrait',
  'portrait-upside-down',
  'landscape',
  'landscape-left',
  'landscape-right',
];

const styles = StyleSheet.create({
  modalRoot: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    top: 110,
  },
  modalBackground: {
    flex: 1,
  },
  modalContent: {
    flex: 1,
    width: '100%',
  },
  modalContentBig: {
    maxWidth: 600,
    maxHeight: 800,
    borderRadius: 10,
    width: '100%',
    overflow: 'hidden',
  },
});
