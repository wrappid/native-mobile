import * as React from 'react';
import NativeBox from '../layouts/NativeBox';

export default function NativeScrollTop(props) {
  const {children} = props;
  const handleClick = event => {};

  return (
    <NativeBox onClick={handleClick} role="presentation">
      {children}
    </NativeBox>
  );
}
