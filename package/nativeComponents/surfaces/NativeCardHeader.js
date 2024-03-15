// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeH6 from "../dataDisplay/heading/NativeH6";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import NativeBox from "../layouts/NativeBox";
import NativeGrid from "../layouts/NativeGrid";

export default function NativeCardHeader(props) {
  const {
    title, subheader, action, avatar, _tableAction, styleClasses 
  } =
    props;
  const childrenWithProps = (child, childProps) => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      if (child?.props?.children)
        return React.cloneElement(child, { ...childProps });
      else return React.cloneElement(child);
    }
  };

  return (
    <NativeGrid
      styleClasses={
        _tableAction
          ? [UtilityClasses?.MARGIN?.MB1]
          : [UtilityClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER, UtilityClasses?.MARGIN?.MB1]
      }
    >
      {avatar && (
        <NativeBox gridProps={{ gridSize: 2 }}>
          {childrenWithProps(avatar, { styleClasses: styleClasses })}
        </NativeBox>
      )}

      <NativeBox
        styleClasses={
          _tableAction && [UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER]
        }
        gridProps={
          _tableAction
            ? { gridSize: 3 }
            : avatar
              ? action
                ? { gridSize: 8 }
                : { gridSize: 10 }
              : action
                ? { gridSize: 10 }
                : { gridSize: 12 }
        }
      >
        {title && <NativeH6>{title}</NativeH6>}

        {subheader && (
          <NativeTypographyBody1>{subheader}</NativeTypographyBody1>
        )}
      </NativeBox>

      {action && (
        <NativeBox
          styleClasses={[UtilityClasses?.FLEX?.DIRECTION_ROW, UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_FLEX_END, UtilityClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER]}
          gridProps={_tableAction ? { gridSize: 9 } : { gridSize: 2 }}
        >
          {childrenWithProps(action, { styleClasses: styleClasses })}
        </NativeBox>
      )}
    </NativeGrid>
  );
}
