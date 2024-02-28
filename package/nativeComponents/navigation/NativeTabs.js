import { SCTabs } from "../../styledComponents/navigation/SCTabs";

export default function NativeTabs(props) {
  return <SCTabs {...props}>{props.children}</SCTabs>;
}
