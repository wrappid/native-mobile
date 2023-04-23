import React from 'react';
import {SCAccordion} from '../../surfaces/SCAccordion';

export default function NativeAccordion(props) {
  console.log('props', props);
  return (
    <SCAccordion
      title={props.children && props.children[0] ? props.children[0] : null}
      {...props}>
      {props.children && props.children[1] ? props.children[1] : null}
    </SCAccordion>
  );
}
