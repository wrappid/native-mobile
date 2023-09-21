import React from 'react';
import {SCTableRow} from '../../styledComponents/dataDisplay/SCTableRow';
import {TouchableOpacity} from 'react-native';
import NativeTypographyBody1 from './paragraph/NativeTypographyBody1';
import NativeDivider from './NativeDivider';

export default function NativeTableRow(props) {
  return (
    <>
      <TouchableOpacity onPress={props.onClick ? props.onClick : () => {}}>
        {typeof children === 'string' ? (
          <SCTableRow {...props}>
            <NativeTypographyBody1> {props.children} </NativeTypographyBody1>
          </SCTableRow>
        ) : (
          <SCTableRow {...props}>{props.children}</SCTableRow>
        )}
      </TouchableOpacity>
      <NativeDivider />
    </>
  );
}
