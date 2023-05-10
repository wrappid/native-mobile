import React from "react";
// import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import { SCAppBar } from "../../styledComponents/surfaces/SCAppBar";
// import NativeIconButton from "../inputs/NativeIconButton";
// import NativeIcon from "../dataDisplay/NativeIcon";
// import NativeImage from "../dataDisplay/NativeImage";

export default function NativeAppBar(props) {
  return <SCAppBar {...props}>{props.children}</SCAppBar>;
}
