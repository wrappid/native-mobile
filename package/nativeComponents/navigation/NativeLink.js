import React, { useEffect, useState } from "react";
// import { SCLink } from "../../styledComponents/navigation/SCLink";
import NativeTooltip from "../dataDisplay/NativeTooltip";
import NativeTypographyCaption from "../dataDisplay/paragraph/NativeTypographyCaption";
import { Link } from "react-router-native";
import { UtilityClasses } from "@wrappid/styles";
import { Linking, TouchableOpacity } from "react-native";

export default function NativeLink(props) {
  const { title, href, titlePlacement = "top", ...restProps } = props;
  const [supported, setSpecialLink] = useState(false);

  const checkUrl = async () => {
    if (href) {
      // Checking if the link is supported for links with custom URL scheme.
      const isSupported = await Linking.canOpenURL(href);
      setSpecialLink(isSupported);
    }
  };

  useEffect(() => {
    checkUrl();
  }, [href]);

  const OpenURLButton = async () => {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    // by some browser in the mobile
    if (href) await Linking.openURL(href);
  };

  return (
    <>
      {supported ? (
        <TouchableOpacity onPress={OpenURLButton}>
          <NativeTypographyCaption styleClasses={[UtilityClasses?.LINK?.MUI]}>
            {restProps.children}
          </NativeTypographyCaption>
        </TouchableOpacity>
      ) : title ? (
        <NativeTooltip title={title} arrow placement={titlePlacement}>
          <Link to={props.href} {...restProps} underline="none">
            <NativeTypographyCaption styleClasses={[UtilityClasses?.LINK?.MUI]}>
              {restProps.children}
            </NativeTypographyCaption>
          </Link>
        </NativeTooltip>
      ) : (
        <Link to={props.href} {...restProps} underline="none">
          <NativeTypographyCaption styleClasses={[UtilityClasses?.LINK?.MUI]}>
            {restProps.children}
          </NativeTypographyCaption>
        </Link>
      )}
    </>
  );
}
