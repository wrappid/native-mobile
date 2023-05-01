import React from "react";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import { SCAppBar } from "../../surfaces/SCAppBar";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeImage from "../dataDisplay/NativeImage";

export default function NativeAppBar(props) {
  let logo = null;
  try {
    logo = require("../../../../../src/images/logo.png");
  } catch (err) {
    console.log("Logo file(logo.png) missing for app bar");
  }

  return (
    <SCAppBar>
      <NativeIconButton
        onClick={props.handleDrawer}
        icon={<NativeIcon>menu</NativeIcon>}
      />
      {props.title && (
        <NativeTypographyBody1>{props.title}</NativeTypographyBody1>
      )}
      {logo && <NativeImage src={logo} height={40} width={120} />}
    </SCAppBar>
  );
}
