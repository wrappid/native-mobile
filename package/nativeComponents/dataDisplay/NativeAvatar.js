import React from "react";
import { SCAvatar } from "../../styledComponents/dataDisplay/SCAvatar";
import { SCAvatarText } from "../../styledComponents/dataDisplay/SCAvatarText";

const AVATAR = "avatar";
const AVATAR_LARGE = "avatarLarge";
const AVATAR_MEDIUM = "avatarMedium";
const AVATAR_SMALL = "avatarSmall";
const AVATAR_XLARGE = "avatarXLarge";
const AVATAR_XXLARGE = "avatarXXLarge";

const DEFAULT_AVATAR_SIZE = 62;
let SIZE_MAP = {
  [AVATAR]: DEFAULT_AVATAR_SIZE,
  [AVATAR_SMALL]: 25,
  [AVATAR_MEDIUM]: 50,
  [AVATAR_LARGE]: 70,
  [AVATAR_XLARGE]: 80,
  [AVATAR_XXLARGE]: 90,
};

export default function NativeAvatar(props) {
  const { src = "", label, children, styleClasses } = props;

  let newStyleclasses = [];
  let size = SIZE_MAP.avatar;

  if (styleClasses?.includes(AVATAR)) {
    size = SIZE_MAP[AVATAR];
    newStyleclasses = props.styleClasses?.filter(
      (styleClass) => !styleClass.includes(AVATAR)
    );
  } else if (styleClasses?.includes(AVATAR_SMALL)) {
    size = SIZE_MAP[AVATAR_SMALL];
    newStyleclasses = props.styleClasses?.filter(
      (styleClass) => !styleClass.includes(AVATAR_SMALL)
    );
  } else if (styleClasses?.includes(AVATAR_MEDIUM)) {
    size = SIZE_MAP[AVATAR_MEDIUM];
    newStyleclasses = props.styleClasses?.filter(
      (styleClass) => !styleClass.includes(AVATAR_MEDIUM)
    );
  } else if (styleClasses?.includes(AVATAR_LARGE)) {
    size = SIZE_MAP[AVATAR_LARGE];
    newStyleclasses = props.styleClasses?.filter(
      (styleClass) => !styleClass.includes(AVATAR_LARGE)
    );
  } else if (styleClasses?.includes(AVATAR_XLARGE)) {
    size = SIZE_MAP[AVATAR_XLARGE];
    newStyleclasses = props.styleClasses?.filter(
      (styleClass) => !styleClass.includes(AVATAR_XLARGE)
    );
  } else if (styleClasses?.includes(AVATAR_XXLARGE)) {
    size = SIZE_MAP[AVATAR_XXLARGE];
    newStyleclasses = props.styleClasses?.filter(
      (styleClass) => !styleClass.includes(AVATAR_XXLARGE)
    );
  }

  return label || children ? (
    <SCAvatarText
      {...props}
      label={label || children}
      styleClasses={newStyleclasses}
      size={size}
    />
  ) : (
    <SCAvatar
      {...props}
      source={
        src && typeof src === "string" && src?.includes("http")
          ? { uri: src }
          : src
      }
      styleClasses={newStyleclasses}
      size={size}
    />
  );
}
