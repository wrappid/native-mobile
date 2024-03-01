// eslint-disable-next-line import/named
import { NativeInput } from "./NativeInput";

export default function NativePhone(props) {
  return <NativeInput {...props} type="number" />;
}
