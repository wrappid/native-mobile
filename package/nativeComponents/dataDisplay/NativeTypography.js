import React from "react";
import { variantMap } from "../../helper/componentPropsUtils";
import { SCTypography } from "../../styledComponents/dataDisplay/SCTypography";
import NativeBox from  "../layouts/NativeBox"

export default function NativeTypography(props) {
  const {variant, component} = props
  //Do not use this directly use NativeParagraph

  const getTextComponent=()=>{
    return <SCTypography
      {...props}
      component={component}
      variant={variantMap[variant]}
    >
      {props.children}
    </SCTypography>
  }
  return (
    variant?.includes('body')?
    <NativeBox>
      {getTextComponent()}
    </NativeBox>
    :
    getTextComponent()
  );
}
