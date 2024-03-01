import { SCTableHead } from "../../styledComponents/dataDisplay/SCTableHead";

export default function NativeTableHead(props) {
  return <SCTableHead {...props}>{props.children}</SCTableHead>;
}
