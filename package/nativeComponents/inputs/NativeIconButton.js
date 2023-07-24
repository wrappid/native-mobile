import React from 'react';
import {SCIconButton} from '../../styledComponents/inputs/SCIconButton';

export default function NativeIconButton(props) {
  const {
    title,
    titlePlacement = 'bottom',
    size,
    mode,
    children,
    ...restProps
  } = props;
  const sizeMap = {
    small: 24,
    large: 48,
    medium: 32,
  };

  const childrenWithProps = childProps =>
    React.Children.map(children, child => {
      // Checking isValidElement is the safe way and avoids a
      // typescript error too.
      if (React.isValidElement(child)) {
        if (child?.props?.children)
          return React.cloneElement(child, {...childProps});
        else return React.cloneElement(child);
      }
      return child;
    });

  return (
    <SCIconButton
      mode={mode || 'default'}
      onPress={restProps.onClick}
      size={isNaN(size) ? sizeMap[size] || sizeMap.small : size}
      icon={iconProps =>
        childrenWithProps({...iconProps, styleClasses: restProps.styleClasses})
      }
      styleClasses={restProps?.styleClasses}
      style={restProps?.style}
    />
  );
}
