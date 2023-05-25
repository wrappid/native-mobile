import React from "react";
import { Portal } from "react-native-paper";
import { SCDialog } from "../../styledComponents/feedback/SCDialog";
import { SCDialogTitle } from "../../styledComponents/feedback/SCDialogTitle";
import { SCDialogContent } from "../../styledComponents/feedback/SCDialogContent";
import { SCDialogContentText } from "../../styledComponents/feedback/SCDialogContentText";
import { SCDialogActions } from "../../styledComponents/feedback/SCDialogActions";
import NativeButton from "../inputs/NativeButton";
import { useContext } from "react";

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
          <NativeButton
            onPress={() => {
              dialog.cancelButton();
              setDialog(dialogInitValue);
            }}
          >
            {dialog?.cancelButtonLabel || "Cancel"}
          </NativeButton>
          <NativeButton
            onPress={() => {
              dialog.doneButton();
              setDialog(dialogInitValue);
            }}
          >
            {dialog?.doneButtonLabel || "Done"}
          </NativeButton>
        </SCDialogActions>
      </SCDialog>
    </Portal>
  );
}
