import React, { useEffect, useState } from "react";
import DocumentPicker from "react-native-document-picker";
import { NativeInput } from "./NativeInput";
import { SCInput } from "../../styledComponents/inputs/SCInput";

export default function NativeFilePicker(props) {
  const { label = "Pick Document", formik, id, onChange } = props;

  const [value, setValue] = useState();

  useEffect(() => {
    if (value) {
      formik?.setFieldValue(id, value);
      if (onChange) {
        onChange(value);
      }
    }
  }, [value]);

  const chooseDoc = async () => {
    DocumentPicker.pickSingle({
      type: [
        DocumentPicker.types.xlsx,
        DocumentPicker.types.xls,
        DocumentPicker.types.docx,
        DocumentPicker.types.doc,
        DocumentPicker.types.pdf,
      ],
    })
      .then((file) => {
        setValue(file);
      })
      .catch((err) => {
        console.log("Error to pick document", err);
      });
  };

  return (
    <NativeInput
      value={value ? value.name : null}
      disabled
      right={
        <SCInput.Icon
          icon="file"
          onPress={() => {
            chooseDoc();
          }}
        />
      }
    />
  );
}
