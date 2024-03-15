// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useEffect, useState } from "react";

// eslint-disable-next-line import/namespace
import { PermissionsAndroid } from "react-native";
import * as DocumentPicker from "react-native-document-picker";

import NativeInput from "./NativeInput";
import { SCInput } from "../../styledComponents/inputs/SCInput";

export default function NativeFilePicker(props) {
  // eslint-disable-next-line no-unused-vars
  const { label = "Pick Document", formik, id, onChange } = props;

  const [value, setValue] = useState();

  useEffect(() => {
    if (value) {
      if (formik) {
        formik?.setFieldValue(id, value);
      } else {
        if (onChange) {
          onChange(value);
        }
      }
    }
  }, [value]);

  useEffect(() => {
    requestCameraPermission();
    requestFilesPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          buttonNegative: "Cancel",
          buttonNeutral : "Ask Me Later",
          buttonPositive: "OK",
          message:
            "Allow access to your camera " +
            "so you can take awesome pictures.",
          title: "Allow Camera Permission",
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // -- console.log("You can use the camera");
      } else {
        // -- console.log("Camera permission denied");
      }
    } catch (err) {
      // -- console.warn(err);
    }
  };

  const requestFilesPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          buttonNegative: "Cancel",
          buttonNeutral : "Ask Me Later",
          buttonPositive: "OK",
          message:
            "Allow needs access to your files " +
            "so you can take awesome files.",
          title: "Allow files Permission",
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // -- console.log("You can use the images");
      } else {
        // -- console.log("images permission denied");
      }
    } catch (err) {
      // -- console.warn(err);
    }
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          buttonNegative: "Cancel",
          buttonNeutral : "Ask Me Later",
          buttonPositive: "OK",
          message:
            "Allow needs access to your files " +
            "so you can take awesome files.",
          title: "Allow files Permission",
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // -- console.log("You can use the files");
      } else {
        // -- console.log("files permission denied");
      }
    } catch (err) {
      // -- console.warn(err);
    }
  };

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
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        // -- console.log("Error to pick document", err);
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
