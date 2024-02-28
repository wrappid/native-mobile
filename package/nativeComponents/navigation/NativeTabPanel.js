import NativeBox from "../layouts/NativeBox";

export default function NativeTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <NativeBox
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <>{children}</>}
    </NativeBox>
  );
}
