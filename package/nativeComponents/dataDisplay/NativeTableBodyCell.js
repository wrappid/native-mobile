import NativeTableCell from "./NativeTableCell";

export default function NativeTableBodyCell(props) {
  return (
    <NativeTableCell {...props}>
      {props.children}
    </NativeTableCell>
  );
}
