import NativeFullModal from "../utils/NativeFullModal";

export default function NativeDataTableToolPopover(props) {
  const { open, onClose } = props;

  return (
    <NativeFullModal onClose={onClose} open={open} searchBox={false}>
      {props.children}
    </NativeFullModal>
  );
}
