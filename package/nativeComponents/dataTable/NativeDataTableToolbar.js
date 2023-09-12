import React, {useState} from 'react';
import NativeBox from '../layouts/NativeBox';
import NativeIconButton from '../inputs/NativeIconButton';
import NativeIcon from '../dataDisplay/NativeIcon';
import NativeDropDown from '../utils/NativeDropDown';
import {useTheme} from 'react-native-paper';

export default function NativeDataTableToolbar(props) {
  const {allTools, styleClasses, menuRenderFunction} = props;

  const [open, setPopover] = useState(false);
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
            ? typeof element?.comp === 'function'
              ? element.comp(element.propsApp)
              : element.comp
            : null,
        );
      }
    } else {
      return null;
    }
  };

  return (
    <>
      {allTools?.map(row => (
        <NativeBox
          styleClasses={styleClasses}
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: -24,
            marginRight: -32,
            marginLeft: -24,
            borderBottomWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.colors.onSurfaceDisabled,
          }}>
          {!row.hideInApp && (
            <NativeBox style={{flex: 5, flexDirection: 'row'}}>
              {row?.leftPanel &&
                !row?.leftPanel?.hideInApp &&
                row?.leftPanel?.stacks &&
                row?.leftPanel?.stacks?.map(stack => showStack(stack))}
            </NativeBox>
          )}

          {!row.hideInApp && (
            <NativeBox
              style={{
                flex: 1,
                flexDirection: 'row',
                marginLeft: -24,
                paddingTop: 16,
                paddingLeft: 24,
              }}>
              {row?.rightPanel &&
                !row?.rightPanel?.hideInApp &&
                row?.rightPanel?.stacks && (
                  <NativeDropDown
                    visible={open}
                    onDismiss={onMore}
                    noNavigation={true}
                    anchorPosition="bottom"
                    contentStyle={{
                      minWidth: 200,
                    }}
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
        </NativeBox>
      ))}
    </>
  );
}
