// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
// eslint-disable-next-line import/no-unresolved
import { useSelector, useDispatch } from "react-redux";

import NativeFullModal from "./NativeFullModal";
import NativeH6 from "../dataDisplay/heading/NativeH6";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeBox from "../layouts/NativeBox";

export default function NativeModal(props) {
  // eslint-disable-next-line no-unused-vars
  const { /*open, onClose, */ ...restProps } = props;
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal?.modalOpen || false);
  const modalData = useSelector((state) => state.modal.modalData);
  // eslint-disable-next-line no-unused-vars
  const modalStyle = useSelector((state) => state.modal.modalStyle);
  const modalClose = useSelector((state) => state.modal.modalClose);
  const HandleModalClose = () => {
    dispatch(props.toggleModalState(null));
  };

  return (
    open && (
      <NativeFullModal
        noClose={true}
        open={open}
        onClose={modalClose}
        searchBox={false}
      >
        <NativeBox>
          <NativeBox
            styleClasses={[UtilityClasses?.FLEX?.DIRECTION_ROW, UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_SPACE_BETWEEN]}
          >
            <NativeH6>{modalData?.heading ? modalData.heading : ""}</NativeH6>

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
