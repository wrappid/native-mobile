import React from "react";
import { SCTableRow } from "../../styledComponents/dataDisplay/SCTableRow";
import { TouchableOpacity } from "react-native";

export default function NativeTableRow(props) {
  return (
    <TouchableOpacity onPress={props.onClick ? props.onClick : () => {}}>
      <SCTableRow {...props}>{props.children}</SCTableRow>;
    </TouchableOpacity>
  );
}
