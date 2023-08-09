import React from 'react';
import NativeFormHelperText from './NativeFormHelperText';
import NativeBox from '../layouts/NativeBox';
import NativeIcon from '../dataDisplay/NativeIcon';
import {__IconTypes} from '../../styledComponents/dataDisplay/SCIcon';
import {UtilityClasses} from '@wrappid/styles';
import {useTheme} from 'react-native-paper';

export default function NativeFormErrorText(props) {
  const theme = useTheme();
  return (
    <NativeBox styleClasses={[UtilityClasses.FLEX.DIRECTION_ROW]}>
      <NativeIcon
        style={{color: theme.colors.primary}}
        styleClasses={[UtilityClasses.MARGIN.MR1]}
        type={__IconTypes.MATERIAL_ICON}
        name="error"
      />
      <NativeFormHelperText error {...props}>
        {props.children}
      </NativeFormHelperText>
    </NativeBox>
  );
}
