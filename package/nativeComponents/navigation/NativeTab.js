import React from 'react';
import {SCTab} from '../../styledComponents/navigation/SCTab';
import {UtilityClasses} from '@wrappid/styles';
import NativeTypographyBody2 from '../dataDisplay/paragraph/NativeTypographyBody2';

export default function NativeTab(props) {
  const {label, value, icon, disabled, onClick, currentTab, tabIndex, tabRef} =
    props;

  const onTabChange = () => {
    console.log('TAB REF', tabRef, tabIndex);
    tabRef?.current?.scrollToIndex({
      index: tabIndex,
      animated: true,
      viewPosition: 0.2,
    });
    onClick({}, value);
  };

  return (
    <SCTab
      active={currentTab === value}
      disabled={disabled}
      onPress={onTabChange}
      styleClasses={[UtilityClasses.MARGIN.MR2]}>
      <NativeTypographyBody2
        styleClasses={
          currentTab === value
            ? [
                UtilityClasses?.COLOR?.TEXT_PRIMARY,
                UtilityClasses?.TEXT?.TEXT_WEIGHT_BOLD,
              ]
            : [
                UtilityClasses?.TEXT?.TEXT_WEIGHT_BOLD,
                UtilityClasses?.COLOR?.TEXT_SECONDARY_DARK,
              ]
        }>
        {label}
      </NativeTypographyBody2>
    </SCTab>
  );
}
