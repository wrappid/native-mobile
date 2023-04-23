import React from 'react';
import {SCAvatar} from '../../dataDisplay/SCAvatar';

export default function NativeAvatar(props) {
  const {src} = props;

  return <SCAvatar source={{uri: src}} />;
}
