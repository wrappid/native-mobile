import { SCToolbar } from "../../styledComponents/surfaces/SCToolbar";

export default function NativeToolbar(props) {
  return <SCToolbar {...props}>{props.children}</SCToolbar>;
}
