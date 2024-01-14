import React from "react";
import { SCAvatar } from "../../styledComponents/dataDisplay/SCAvatar";
import { SCAvatarText } from "../../styledComponents/dataDisplay/SCAvatarText";

const AVATAR = "avatar";
const AVATAR_LARGE = "avatarLarge";
const AVATAR_MEDIUM = "avatarMedium";
const AVATAR_SMALL = "avatarSmall";
const AVATAR_XLARGE = "avatarXLarge";
const AVATAR_XXLARGE = "avatarXXLarge";

export const DEFAULT_AVATAR_SIZE = 50;
export const AVATAR_SIZE_MAP = {
  [AVATAR]: DEFAULT_AVATAR_SIZE,
  [AVATAR_SMALL]: 25,
  [AVATAR_MEDIUM]: 60,
  [AVATAR_LARGE]: 70,
  [AVATAR_XLARGE]: 80,
  [AVATAR_XXLARGE]: 90,
};

export const destructureAvatarSizeFromStyles = (styleClasses) => {
  console.log("nativeAvatar---", styleClasses);
  let newStyleclasses = [];
  let size = AVATAR_SIZE_MAP.avatar;

  if (styleClasses?.includes(AVATAR)) {
    size = AVATAR_SIZE_MAP[AVATAR];
    newStyleclasses = styleClasses?.filter(
      (styleClass) => !styleClass.includes(AVATAR)
    );
  } else if (styleClasses?.includes(AVATAR_SMALL)) {
    size = AVATAR_SIZE_MAP[AVATAR_SMALL];
    newStyleclasses = styleClasses?.filter(
      (styleClass) => !styleClass.includes(AVATAR_SMALL)
    );
  } else if (styleClasses?.includes(AVATAR_MEDIUM)) {
    size = AVATAR_SIZE_MAP[AVATAR_MEDIUM];
    newStyleclasses = styleClasses?.filter(
      (styleClass) => !styleClass.includes(AVATAR_MEDIUM)
    );
  } else if (styleClasses?.includes(AVATAR_LARGE)) {
    size = AVATAR_SIZE_MAP[AVATAR_LARGE];
    newStyleclasses = styleClasses?.filter(
      (styleClass) => !styleClass.includes(AVATAR_LARGE)
    );
  } else if (styleClasses?.includes(AVATAR_XLARGE)) {
    size = AVATAR_SIZE_MAP[AVATAR_XLARGE];
    newStyleclasses = styleClasses?.filter(
      (styleClass) => !styleClass.includes(AVATAR_XLARGE)
    );
  } else if (styleClasses?.includes(AVATAR_XXLARGE)) {
    size = AVATAR_SIZE_MAP[AVATAR_XXLARGE];
    newStyleclasses = styleClasses?.filter(
      (styleClass) => !styleClass.includes(AVATAR_XXLARGE)
    );
  } else {
    newStyleclasses = styleClasses;
  }

  return {
    size,
    styleClasses: newStyleclasses,
  };
};

export default function NativeAvatar(props) {
  const { src = "", label, children, styleClasses } = props;

  return label || children ? (
    <SCAvatarText
      {...props}
      label={label || children}
      {...destructureAvatarSizeFromStyles(styleClasses)}
    />
  ) : (
    <SCAvatar
      {...props}
      source={
        src && typeof src === "string" && src?.includes("http")
          ? { uri: src }
          : src
      }
      {...destructureAvatarSizeFromStyles(styleClasses)}
    />
  );
}
