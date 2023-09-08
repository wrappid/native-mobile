import React, {useEffect, useState} from 'react';
import {Linking, Pressable} from 'react-native';
import NativeTypography from '../dataDisplay/NativeTypography';
import {StyledComponentsClasses, UtilityClasses} from '@wrappid/styles';
import {SCLink} from '../../styledComponents/navigation/SCLink';

export default function NativeLink(props) {
  const {title, href, titlePlacement = 'top', onClick, ...restProps} = props;
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

  const getLinkString = () => {
    /**
     * used because sc link or react router native link do not take
     * string as child should be wrapped with text component
     */
    if (typeof restProps.children === 'string') {
      return (
        <NativeTypography
          styleClasses={[
            StyledComponentsClasses.NAVIGATION.LINK,
            UtilityClasses?.TEXT?.TEXT_WEIGHT_BOLD,
            restProps.styleClasses,
          ]}>
          {restProps.children}
        </NativeTypography>
      );
    } else {
      return restProps.children;
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
