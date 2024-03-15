// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { isValidElement, useEffect, useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { StyledComponentsClasses, UtilityClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { Linking, Pressable } from "react-native";

import { SCLink } from "../../styledComponents/navigation/SCLink";
import NativeTypography from "../dataDisplay/NativeTypography";

export default function NativeLink(props) {
  // eslint-disable-next-line no-unused-vars
  const { title, href, titlePlacement = "top", onClick, ...restProps } = props;
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

  const linkStyles = [StyledComponentsClasses.NAVIGATION.LINK, UtilityClasses?.TEXT?.TEXT_WEIGHT_BOLD];

  const getLinkString = () => {
    /**
     * used because sc link or react router native link do not take
     * string as child should be wrapped with text component
     */
    if (typeof restProps.children === "string") {
      return (
        <NativeTypography
          styleClasses={[...linkStyles, restProps.styleClasses]}
        >
          {restProps.children}
        </NativeTypography>
      );
    } else {
      /**
       * copying styleclasses to child like typography
       */
      if (restProps.children && Array.isArray(restProps.children)) {
        return restProps.children?.map((child) => {
          if (isValidElement(child)) {
            return React.cloneElement(child, {
              ...(child.props || {}),
              styleClasses: [...(child?.props?.styleClasses | []), ...linkStyles],
            });
          } else {
            return child;
          }
        });
      } else if (isValidElement(restProps.children)) {
        return React.cloneElement(restProps.children, {
          ...(restProps?.children?.props || {}),
          styleClasses: [...(restProps.children?.props?.styleClasses || []), ...linkStyles],
        });
      } else {
        return restProps.children;
      }
    }
  };

  return (
    <>
      {supported ? (
        <Pressable onPress={OpenURLButton}>{getLinkString()}</Pressable>
      ) : onClick ? (
        <Pressable onPress={onClick}>{getLinkString()}</Pressable>
      ) : (
        <SCLink to={props.href} {...restProps} underline="none">
          {getLinkString()}
        </SCLink>
      )}
    </>
  );
}
