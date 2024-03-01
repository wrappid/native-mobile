import { useTheme } from "react-native-paper";

import { SCBadge } from "../../styledComponents/dataDisplay/SCBadge";

export default function NativeBadge(props) {
  /**
   * Styleclasses/styles props do not work for colors according to react native
   * paper.
   */
  // eslint-disable-next-line no-unused-vars
  const { badgeContent, color, ...restProps } = props;
  const theme = useTheme();
  const getThemeObject = () => {
    return color
      ? { colors: { error: color === "success" ? "green" : theme.colors[color] } }
      : {};
  };

  return (
    <SCBadge {...props} theme={getThemeObject()}>
      {badgeContent}
    </SCBadge>
  );
}
