import React, {isValidElement, cloneElement} from 'react';
import {SCStack} from '../../styledComponents/layouts/SCStack';
import {UtilityClasses} from '@wrappid/styles';
import NativeDivider from '../dataDisplay/NativeDivider';
import {CoreBox} from '@wrappid/core';
import NativeBox from './NativeBox';

export default function NativeStack(props) {
  // direction
  //   'column-reverse'
  // | 'column'
  // | 'row-reverse'
  // | 'row'
  // divider	node
  // spacing
  //   Array<number
  // | string>
  // | number
  // | object
  // | string

  const {
    direction = 'column',
    divider,
    spacing = 0,
    styleClasses,
    children,
    ...restProps
  } = props;

  const preparedStyleClasses = [
    UtilityClasses.FLEX[
      `DIRECTION_${direction.replace('-', '_').toUpperCase()}`
    ],
    UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_FLEX_START,
    UtilityClasses?.FLEX?.FLEX_WRAP_WRAP,
    ...(styleClasses || []),
  ];

  const childrenWithProps = () => {
    let marginClasses = [];
    let marginString = 'M';

    if (direction === 'column') {
      marginString += 'T' + spacing;
      marginString = marginString.toUpperCase();
      marginClasses.push(UtilityClasses?.MARGIN[marginString]);
    } else {
      marginString += 'L' + spacing;
      marginClasses.push(UtilityClasses?.MARGIN[marginString]);
    }

    let newChildren =
      children &&
      Array.isArray(children) &&
      children?.map((child, index) => {
        if (child && isValidElement(child)) {
          let childStyleClasses =
            index > 0
              ? [marginClasses]
              : [];
          return (
            <>
              <NativeBox styleClasses={childStyleClasses}>
                {newChild}
              </NativeBox>
              {divider && index < children?.length - 1 && (
                <CoreBox styleClasses={marginClasses}>
                  <NativeDivider
                    orientation={
                      direction === 'column' ? 'horizontal' : 'vertical'
                    }
                  />
                </CoreBox>
              )}
            </>
          );
        } else {
          return child;
        }
      });

    return newChildren;
  };

  return (
    <SCStack {...restProps} styleClasses={preparedStyleClasses}>
      {childrenWithProps()}
    </SCStack>
  );
}
