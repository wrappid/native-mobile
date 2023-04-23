import React from 'react';
import {useState} from 'react';
import {NativeInput} from './NativeInput';
import {SCInput} from '../../inputs/SCInput';

export default function NativeConfirmPassword(props) {
  const {onChange, ...restProps} = props;
  const [showPassword, togglePasswordView] = useState(false);

  const handleClickShowPassword = () => {
    togglePasswordView(!showPassword);
  };

  return (
    <NativeInput
      {...restProps}
      onChange={onChange}
      secureTextEntry={!showPassword}
      right={
        <SCInput.Icon
          icon={showPassword ? 'eye-off' : 'eye'}
          onPress={() => {
            handleClickShowPassword();
          }}
        />
      }
    />
  );
}
