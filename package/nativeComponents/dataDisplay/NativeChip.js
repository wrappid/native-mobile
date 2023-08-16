import React from 'react';
import {variantMap} from '../../helper/componentPropsUtils';
import {SCChip} from '../../styledComponents/dataDisplay/SCChip';
import {useTheme} from 'react-native-paper';

export default function NativeChip(props) {
  const {label, variant, onClick, icon, styleClasses, avatar, ...restProps} =
    props;

  const theme = useTheme();

  const iconWithProps = iconProps => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, {
        ...iconProps,
        styleClasses: icon.props.styleClasses || styleClasses || [],
      });
    } else {
      return null;
    }
  };

  const avatarWithProps = avatarProps => {
    if (React.isValidElement(avatar)) {
      return React.cloneElement(avatar, {
        ...avatarProps,
        styleClasses: [
          ...(avatar.props.styleClasses || styleClasses || []),
          'avatarSmall',
        ],
      });
    } else {
      return null;
    }
  };

  return avatar ? (
    <SCChip
      {...restProps}
      theme={theme}
      styleClasses={styleClasses || []}
      mode={variantMap[variant]}
      onPress={onClick ? onClick : () => {}}
      //intentionaly icon props used for avatar avatar props not working
      avatar={avatarWithProps({})}>
      {label}
    </SCChip>
  ) : icon ? (
    <SCChip
      {...restProps}
      theme={theme}
      styleClasses={styleClasses || []}
      mode={variantMap[variant]}
      onPress={onClick ? onClick : () => {}}
      icon={iconProps => iconWithProps(iconProps)}>
      {label}
    </SCChip>
  ) : (
    <SCChip
      {...restProps}
      theme={theme}
      styleClasses={styleClasses || []}
      mode={variantMap[variant]}
      onPress={onClick ? onClick : () => {}}>
      {label}
    </SCChip>
  );
}
