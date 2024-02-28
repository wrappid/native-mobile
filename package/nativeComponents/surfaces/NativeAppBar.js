import { SCAppBar } from "../../styledComponents/surfaces/SCAppBar";

export default function NativeAppBar(props) {
  return (
    <SCAppBar styleClasses={props.styleClasses || []}>
      {props.children}
    </SCAppBar>
  );
}
