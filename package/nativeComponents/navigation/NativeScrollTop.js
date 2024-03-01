import NativeBox from "../layouts/NativeBox";

export default function NativeScrollTop(props) {
  const { children } = props;
  // eslint-disable-next-line no-unused-vars
  const handleClick = event => {};

  return (
    <NativeBox onClick={handleClick} role="presentation">
      {children}
    </NativeBox>
  );
}
