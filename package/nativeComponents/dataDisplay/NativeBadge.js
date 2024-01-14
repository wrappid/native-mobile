import React from "react";
import { SCBadge } from "../../styledComponents/dataDisplay/SCBadge";
import { useTheme } from "react-native-paper";

export default function NativeBadge(props) {
  /**
   * Styleclasses/styles props do not work for colors according to react native
   * paper.
   */
  const { badgeContent, color, ...restProps } = props;
  const theme = useTheme();
  const getThemeObject = () => {
    return color
      ? {
          colors: {
            error: color === "success" ? "green" : theme.colors[color],
          },
        }
      : {};
  };

  return (
    <SCBadge {...props} theme={getThemeObject()}>
      {badgeContent}
    </SCBadge>
  );
}
