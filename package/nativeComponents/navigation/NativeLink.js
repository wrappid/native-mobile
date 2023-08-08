import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-native';
import {Linking, Pressable} from 'react-native';
import NativeTypography from '../dataDisplay/NativeTypography';

export default function NativeLink(props) {
  const {title, href, titlePlacement = 'top', ...restProps} = props;
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
    if (typeof restProps.children === 'string') {
      return (
        <NativeTypography styleClasses={[restProps.styleClasses]}>
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
      ) : (
        <Link to={props.href} {...restProps} underline="none">
          {getLinkString()}
        </Link>
      )}
    </>
  );
}
