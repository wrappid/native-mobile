import { useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses, StyledComponentsClasses } from "@wrappid/styles";
import { useTheme } from "react-native-paper";

import NativeIcon from "../dataDisplay/NativeIcon";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeBox from "../layouts/NativeBox";
import NativeGrid from "../layouts/NativeGrid";
import NativeDropDown from "../utils/NativeDropDown";

export default function NativeDataTableToolbar(props) {
  const { allTools, styleClasses, menuRenderFunction } = props;

  const [open, setPopover] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();

  const onMore = () => {
    setPopover(!open);
  };

  const showStack = stack => {
    if (!stack.hideInApp) {
      if (menuRenderFunction) {
        let visibleItems = stack?.filter(element => !element.hideInApp);

        return menuRenderFunction(visibleItems);
      } else {
        return stack?.map(element =>
          element?.comp && !element.hideInApp
            ? typeof element?.comp === "function"
              ? element.comp(element.propsApp)
              : element.comp
            : null
        );
      }
    } else {
      return null;
    }
  };

  return (
    <>
      {allTools?.map(row => (
        // eslint-disable-next-line react/jsx-key
        <NativeGrid
          styleClasses={[...(styleClasses || []), StyledComponentsClasses.DATA_DISPLAY.MOBILE_TABLE_TOOLBAR]}>
          {!row.hideInApp && (
            <NativeBox gridProps={{ gridSize: 11 }}>
              {row?.leftPanel &&
                !row?.leftPanel?.hideInApp &&
                row?.leftPanel?.stacks &&
                row?.leftPanel?.stacks?.map(stack => showStack(stack))}
            </NativeBox>
          )}

          {!row.hideInApp && (
            <NativeBox
              gridProps={{ gridSize: 1 }}
              styleClasses={[UtilityClasses?.FLEX?.DIRECTION_ROW, UtilityClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER, UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER]}>
              {row?.rightPanel &&
                !row?.rightPanel?.hideInApp &&
                row?.rightPanel?.stacks && (
                <NativeDropDown
                  visible={open}
                  onDismiss={onMore}
                  noNavigation={true}
                  anchorPosition="bottom"
                  contentStyle={{ minWidth: 200 }}
                  anchor={
                    <NativeIconButton onClick={onMore}>
                      <NativeIcon name="more-vert" />
                    </NativeIconButton>
                  }>
                  {row?.rightPanel?.stacks?.map(stack => showStack(stack))}
                </NativeDropDown>
              )}
            </NativeBox>
          )}
        </NativeGrid>
      ))}
    </>
  );
}
