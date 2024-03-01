// eslint-disable-next-line import/namespace
import { View } from "react-native";

export default function NativeFormContainer(props) {
  return <View {...props}>{props.children}</View>;
}
