
// eslint-disable-next-line import/namespace
import { StatusBar } from "react-native";
import { useTheme } from "react-native-paper";

import NativeBox from "./NativeBox";

export default function NativeAppContainer(props) {
  // eslint-disable-next-line no-unused-vars
  const { appBar, leftDrawer, footer, uid, coreClasses } = props;
  const theme = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={
          !uid ? theme?.colors?.onPrimaryContainer : theme?.colors?.onPrimary
        }
        barStyle="light-content"
      />

      {uid && appBar()}

      <NativeBox
        style={
          uid
            ? { backgroundColor: theme?.colors?.background, height: "92%" }
            : { backgroundColor: theme?.colors?.onPrimaryContainer }
        }>
        {leftDrawer()}

        {props.children}
      </NativeBox>
    </>
  );
}
