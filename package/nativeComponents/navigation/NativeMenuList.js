import { SCMenuList } from "../../styledComponents/inputs/SCMenuList";

export default function NativeMenuList(props) {
  return <SCMenuList {...props}>{props.children}</SCMenuList>;
}
