import React from 'react';
import {SCImage} from '../../dataDisplay/SCImage';

export default function NativeImage(props) {
  const {src, ...restProps} = props;

  return <SCImage source={{uri: src}} {...restProps} />;
}
