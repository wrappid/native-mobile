import React from 'react';
import {SCDivider} from '../../styledComponents/dataDisplay/SCDivider.js';
import {UtilityClasses} from '@wrappid/styles';

export default function NativeDivider(props) {
  const {orientation, variant, styleClasses, style, ...restProps} = props;

  const getVariantProps = () => {
    let variantProps = {};
    if (variant === 'inset') {
      variantProps['leftInset'] = true;
    } else if (variant === 'middle') {
      variantProps['horizontalInset'] = true;
    }
    return variantProps;
  };

  return (
    <SCDivider
      {...restProps}
      {...getVariantProps}
      style={
        orientation === 'vertical'
          ? {
              ...(style | {}),
              padding: 0.5,
              height: '100%',
            }
          : style
      }
    />
  );
}
