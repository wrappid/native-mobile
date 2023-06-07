import React, { useContext } from "react";
import { Portal } from "react-native-paper";
import { SCDialog } from "../../styledComponents/feedback/SCDialog";
import { SCDialogTitle } from "../../styledComponents/feedback/SCDialogTitle";
import { SCDialogContent } from "../../styledComponents/feedback/SCDialogContent";
import { SCDialogContentText } from "../../styledComponents/feedback/SCDialogContentText";
import { SCDialogActions } from "../../styledComponents/feedback/SCDialogActions";
import NativeTextButton from "../inputs/NativeTextButton";

export default function NativeDialog(props) {
  const { dialogInitValue, DialogContext } = props;
  const { dialog, setDialog } = useContext(DialogContext);
  console.log(`dialog: ${dialog} & setDialog: ${setDialog}`);
  return (
    <Portal>
      <SCDialog
        visible={dialog?.showDialog || false}
        onDismiss={() => {
          setDialog(dialogInitValue);
        }}
      >
        {/* @TODO Need to support icon as well  */}
        <SCDialogTitle>{dialog?.title || ""}</SCDialogTitle>
        <SCDialogContent>
          <SCDialogContentText>{dialog?.subtitle || ""}</SCDialogContentText>
        </SCDialogContent>
        <SCDialogActions>
          <NativeTextButton label="Cancel"
            OnClick={() => {
              dialog.cancelButton();
              setDialog(dialogInitValue);
            }}
          >
            {dialog?.cancelButtonLabel || "Cancel"}
          </NativeTextButton>
          <NativeTextButton label="Done"
            OnClick={() => {
              dialog.doneButton();
              setDialog(dialogInitValue);
            }}
          >
            {dialog?.doneButtonLabel || "Done"}
          </NativeTextButton>
        </SCDialogActions>
      </SCDialog>
    </Portal>
  );
}
