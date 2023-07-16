import React from "react";
import { SCModal } from "../../styledComponents/utils/SCModal";
import { useSelector, useDispatch } from "react-redux";
import NativeBox from "../layouts/NativeBox";
import NativeH6 from "../dataDisplay/heading/NativeH6";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeIcon from "../dataDisplay/NativeIcon";
import { UtilityClasses, StyledComponentsClasses } from "@wrappid/styles";

export default function NativeModal(props) {
  const { /*open, onClose, */ ...restProps } = props;
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal?.modalOpen || false);
  const modalData = useSelector((state) => state.modal.modalData);
  const modalStyle = useSelector((state) => state.modal.modalStyle);
  const modalClose = useSelector((state) => state.modal.modalClose);
  const HandleModalClose = () => {
    dispatch(props.toggleModalState(null));
  };

  return (
    <>
      {open && (
        <SCModal
          visible={open}
          onRequestClose={modalClose}
          transparent={false}
          {...restProps}
        >
          <NativeBox display={"flex"}>
          <NativeBox>
            {<NativeH6>{modalData?.heading ? modalData.heading : ""}</NativeH6>}
          </NativeBox>
          <NativeIconButton onClick={HandleModalClose}>
            <NativeIcon name="close" type="material-icon">
              close
            </NativeIcon>
          </NativeIconButton>
          <NativeBox
            styleClasses={
              props.bodyStyle
                ? [
                    StyledComponentsClasses.MODAL.MODAL_BODY,
                    ...modalStyle?.bodyStyle,
                  ]
                : [StyledComponentsClasses.MODAL.MODAL_BODY]
            }
            // id="modal-modal-description"
          >
            {React.isValidElement(modalData?.comp) ? modalData?.comp : null}
          </NativeBox>
          </NativeBox>
        </SCModal>
      )}
    </>
  );
}
