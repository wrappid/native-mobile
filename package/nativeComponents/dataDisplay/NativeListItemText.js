import { SCListItemText } from "../../styledComponents/dataDisplay/SCListItemText";

export default function NativeListItemText(props) {
  return <SCListItemText {...props}>{props.children}</SCListItemText>;
}
