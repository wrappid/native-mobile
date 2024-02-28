import { useTheme } from "react-native-paper";

import { SCDropDown } from "../../styledComponents/utils/SCDropDown";

export default function NativeDropDown(props) {
  const { visible, onDismiss, anchor, contentStyle } = props;
  const theme = useTheme();

  return (
    <SCDropDown
      contentStyle={{
        backgroundColor: theme.colors.background,
        ...(contentStyle || {}),
      }}
      visible={visible}
      onDismiss={onDismiss}
      anchorPosition="bottom"
      anchor={anchor}>
      {props?.children}
    </SCDropDown>
  );
}
