import NativeH from "./NativeH";

export default function NativeH4(props) {
  return (
    <NativeH {...props} __level="h4">
      {props.children}
    </NativeH>
  );
}
