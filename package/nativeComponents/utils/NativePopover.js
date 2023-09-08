import React, {useEffect, useRef, useState} from 'react';
import NativeBox from '../layouts/NativeBox';
import NativeIcon from '../dataDisplay/NativeIcon';
import NativeIconButton from '../inputs/NativeIconButton';

import {UtilityClasses} from '@wrappid/styles';
import {Animated} from 'react-native';

export default function NativePopover(props) {
  const {open, onClose, ...restProps} = props;
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  console.log('open', open);
  console.log('restPorps', restProps);

  return (
    props.open && (
      <NativeBox
        styleClasses={[
          UtilityClasses?.DISPLAY?.FLEX,
          UtilityClasses?.POSITION?.FIXED_TOP,
        ]}
        // @todo should be removed if background color opacity support
        // can be given in styleclasses
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 100,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <NativeBox
          style={{
            position: 'absolute',
            top: 200,
          }}
          styleClasses={[
            UtilityClasses?.DISPLAY?.FLEX,
            UtilityClasses?.OPACITY?.OPACITY_100,
            UtilityClasses?.WIDTH?.W_75,
          ]}>
          <Animated.View style={{opacity: fadeAnim}}>
            <NativeBox
              style={{flex: 1, zIndex: 200, borderRadius: 10}}
              styleClasses={[
                UtilityClasses?.BG?.BG_WHITE,
                UtilityClasses?.PADDING?.PY2,
              ]}>
              <NativeBox
                style={{
                  marginTop: -25,
                }}
                styleClasses={[
                  UtilityClasses.DISPLAY?.FLEX,
                  UtilityClasses.ALIGNMENT?.ALIGN_ITEMS_END,
                ]}>
                <NativeIconButton
                  // styleClasses={[UtilityClasses?.BG?.BG_WHITE]}
                  onClick={() => onClose && onClose()}>
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
