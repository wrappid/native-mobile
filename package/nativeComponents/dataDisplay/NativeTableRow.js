// eslint-disable-next-line import/namespace
import { TouchableOpacity } from "react-native";

import NativeDivider from "./NativeDivider";
import NativeTypographyBody1 from "./paragraph/NativeTypographyBody1";
import { SCTableRow } from "../../styledComponents/dataDisplay/SCTableRow";

export default function NativeTableRow(props) {
  return (
    <>
      <TouchableOpacity onPress={props.onClick ? props.onClick : () => {}}>
        {typeof children === "string" ? (
          <SCTableRow {...props}>
            <NativeTypographyBody1> {props.children} </NativeTypographyBody1>
          </SCTableRow>
        ) : (
          <SCTableRow {...props}>{props.children}</SCTableRow>
        )}
      </TouchableOpacity>

      <NativeDivider />
    </>
  );
}
