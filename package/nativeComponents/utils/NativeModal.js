import React from 'react';
import {SCModal} from '../../styledComponents/utils/SCModal';
import {useSelector, useDispatch} from 'react-redux';
import NativeBox from '../layouts/NativeBox';
import NativeH6 from '../dataDisplay/heading/NativeH6';
import NativeIconButton from '../inputs/NativeIconButton';
import NativeIcon from '../dataDisplay/NativeIcon';
import {UtilityClasses, StyledComponentsClasses} from '@wrappid/styles';
import NativeFullModal from './NativeFullModal';

export default function NativeModal(props) {
  const {/*open, onClose, */ ...restProps} = props;
  const dispatch = useDispatch();
  const open = useSelector(state => state.modal?.modalOpen || false);
  const modalData = useSelector(state => state.modal.modalData);
  const modalStyle = useSelector(state => state.modal.modalStyle);
  const modalClose = useSelector(state => state.modal.modalClose);
  const HandleModalClose = () => {
    dispatch(props.toggleModalState(null));
  };

  return (
    open && (
      <NativeFullModal
        noClose={true}
        open={open}
        onClose={modalClose}
        searchBox={false}>
        <NativeBox>
          <NativeBox
            styleClasses={[
              UtilityClasses?.FLEX?.DIRECTION_ROW,
              UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_SPACE_BETWEEN,
            ]}>
            <NativeH6>{modalData?.heading ? modalData.heading : ''}</NativeH6>
            <NativeIconButton onClick={HandleModalClose}>
              <NativeIcon name="close" type="material-icon">
                close
              </NativeIcon>
            </NativeIconButton>
          </NativeBox>
          <NativeBox>
            {React.isValidElement(modalData?.comp) ? modalData?.comp : null}
          </NativeBox>
        </NativeBox>
      </NativeFullModal>
    )
  );
}
