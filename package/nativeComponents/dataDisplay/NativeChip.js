import React from 'react';
import {variantMap} from '../../helper/componentPropsUtils';
import {SCChip} from '../../styledComponents/dataDisplay/SCChip';

export default function NativeChip(props) {
  const {label, variant, onClick, icon, styleClasses, ...restProps} = props;

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

  return (
    <SCChip
      {...restProps}
      styleClasses={styleClasses||[]}
      mode={variantMap[variant]}
      onPress={onClick ? onClick : () => {}}
      icon={iconProps => iconWithProps(iconProps)}>
      {label}
    </SCChip>
  );
}
