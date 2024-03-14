// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { Modal as RNModal } from "react-native";
import { Portal } from "react-native-paper";

import { SCDialog } from "../../styledComponents/feedback/SCDialog";
import { SCDialogActions } from "../../styledComponents/feedback/SCDialogActions";
import { SCDialogContent } from "../../styledComponents/feedback/SCDialogContent";
import { SCDialogContentText } from "../../styledComponents/feedback/SCDialogContentText";
import { SCDialogTitle } from "../../styledComponents/feedback/SCDialogTitle";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeTextButton from "../inputs/NativeTextButton";
import NativeBox from "../layouts/NativeBox";

export default function NativeDialog(props) {
  const { dialogInitValue, DialogContext } = props;
  const { dialog, setDialog } = useContext(DialogContext);

  return (
    <Portal>
      <RNModal visible={dialog?.showDialog || false} transparent={true}>
        <SCDialog
          visible={dialog?.showDialog || false}
          onDismiss={() => {
            setDialog(dialogInitValue);
          }}
        >
          <NativeBox style={{ alignItems: "center" }}>
            {dialog?.type === "info" ? (
              <NativeIcon
                type="material-icons"
                size="medium"
                childrenFlag={true}
                name="info"
                styleClasses={[UtilityClasses.COLOR.TEXT_WARNING]}
              />
            ) : dialog?.type === "error" ? (
              <NativeIcon
                type="material-icons"
                size="medium"
                childrenFlag={true}
                name="cancel"
                styleClasses={[UtilityClasses.COLOR.TEXT_ERROR]}
              />
            ) : (
              <NativeIcon
                type="material-icons"
                size="medium"
                childrenFlag={true}
                name="check-circle"
                styleClasses={[UtilityClasses.COLOR.TEXT_SUCCESS]}
              />
            )}
          </NativeBox>

          <SCDialogTitle styleClasses={[UtilityClasses.TEXT.TEXT_CENTER]}>
            {dialog?.title || ""}
          </SCDialogTitle>

          <SCDialogContent>
            <SCDialogContentText>{dialog?.subtitle || ""}</SCDialogContentText>
          </SCDialogContent>

          <SCDialogActions>
            {!dialog.noCancelButton && (
              <NativeTextButton
                label={dialog?.cancelButtonLabel || "Cancel"}
                OnClick={() => {
                  if (
                    dialog.cancelButton &&
                    typeof dialog.cancelButton === "function"
                  ) {
                    dialog.cancelButton();
                  }
                  setDialog(dialogInitValue);
                }}
              />
            )}

            {!dialog.noDoneButton && (
              <NativeTextButton
                label={dialog?.doneButtonLabel || "Done"}
                OnClick={() => {
                  if (
                    dialog.doneButton &&
                    typeof dialog.doneButton === "function"
                  ) {
                    dialog.doneButton();
                  }
                  setDialog(dialogInitValue);
                }}
              />
            )}
          </SCDialogActions>
        </SCDialog>
      </RNModal>
    </Portal>
  );
}
