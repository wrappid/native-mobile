import React, { useContext } from "react";
import { Portal } from "react-native-paper";
import { SCDialog } from "../../styledComponents/feedback/SCDialog";
import { SCDialogTitle } from "../../styledComponents/feedback/SCDialogTitle";
import { SCDialogContent } from "../../styledComponents/feedback/SCDialogContent";
import { SCDialogContentText } from "../../styledComponents/feedback/SCDialogContentText";
import { SCDialogActions } from "../../styledComponents/feedback/SCDialogActions";
import NativeTextButton from "../inputs/NativeTextButton";
import { UtilityClasses } from "@wrappid/styles";
import NativeBox from "../layouts/NativeBox";
import NativeIcon from "../dataDisplay/NativeIcon";

export default function NativeDialog(props) {
  const { dialogInitValue, DialogContext } = props;
  const { dialog, setDialog } = useContext(DialogContext);
  console.log("dialog:", dialog, "setDialog:", setDialog);
  return (
    <Portal>
      <SCDialog
        visible={dialog?.showDialog || false}
        onDismiss={() => {
          setDialog(dialogInitValue);
        }}
      >
        {dialog?.type === "info" ? (
          <NativeBox
            style={{ alignItems: "center" }}
            styleClasses={[UtilityClasses.COLOR.TEXT_ERROR]}
          >
            <NativeIcon
              type="material-icons"
              size="medium"
              childrenFlag={true}
              name="info"
              styleClasses={[UtilityClasses.COLOR.TEXT_WARNING]}
            />
          </NativeBox>
        ) : dialog?.type === "error" ? (
          <NativeBox
            styleClasses={[
              UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER,
              UtilityClasses.COLOR.TEXT_ERROR,
            ]}
          >
            <NativeIcon
              type="material-icons"
              size="medium"
              childrenFlag={true}
              name="cancel"
            />
          </NativeBox>
        ) : (
          <NativeBox
            styleClasses={[
              UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER,
              UtilityClasses?.COLOR?.TEXT_SUCCESS,
            ]}
          >
            <NativeIcon
              type="material-icons"
              size="medium"
              childrenFlag={true}
              name="check-circle"
            />
          </NativeBox>
        )}
        <SCDialogTitle styleClasses={[UtilityClasses.TEXT.TEXT_CENTER]}>
          {dialog?.title || ""}
        </SCDialogTitle>
        <SCDialogContent>
          <SCDialogContentText>{dialog?.subtitle || ""}</SCDialogContentText>
        </SCDialogContent>
        <SCDialogActions>
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
        </SCDialogActions>
      </SCDialog>
    </Portal>
  );
}
