import NativeStack from "../layouts/NativeStack";

export default function NativeMenu(props) {
  return <NativeStack direction="column">{props.children}</NativeStack>;
}
