import React from 'react';
import NativeBox from '../layouts/NativeBox';
import NativeH6 from '../dataDisplay/heading/NativeH6';
import NativeTypographyBody1 from '../dataDisplay/paragraph/NativeTypographyBody1';
import NativeGrid from '../layouts/NativeGrid';
import {UtilityClasses} from '@wrappid/styles';

export default function NativeCardHeader(props) {
  const {title, subheader, action, avatar, styleClasses} = props;
  const childrenWithProps = (child, childProps) => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      if (child?.props?.children)
        return React.cloneElement(child, {...childProps});
      else return React.cloneElement(child);
    }
  };

  return (
    <NativeGrid
      styleClasses={[
        UtilityClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER,
        UtilityClasses?.MARGIN?.MB1,
      ]}>
      {avatar && (
        <NativeBox gridProps={{gridSize: 2}}>
          {childrenWithProps(avatar, {
            styleClasses: styleClasses,
          })}
        </NativeBox>
      )}
      <NativeBox
        gridProps={
          avatar
            ? action
              ? {gridSize: 8}
              : {gridSize: 10}
            : action
            ? {gridSize: 10}
            : {gridSize: 12}
        }>
        {title && <NativeH6>{title}</NativeH6>}
        {subheader && (
          <NativeTypographyBody1>{subheader}</NativeTypographyBody1>
        )}
      </NativeBox>
      {action && (
        <NativeBox
          styleClasses={[
            UtilityClasses?.FLEX?.DIRECTION_ROW,
            UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_FLEX_END,
            UtilityClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER,
          ]}
          gridProps={{gridSize: 2}}>
          {childrenWithProps(action, {
            styleClasses: styleClasses,
          })}
        </NativeBox>
      )}
    </NativeGrid>
  );
}
