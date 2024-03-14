// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useEffect, useState } from "react";

// eslint-disable-next-line import/namespace

// eslint-disable-next-line import/no-unresolved
import { NativeGrid, NativeTypographyBody1 } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { SCDialog } from "@wrappid/native/styledComponents/feedback/SCDialog";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { TouchableOpacity, PermissionsAndroid, Modal as RNModal } from "react-native";
import * as ImagePicker from "react-native-image-crop-picker";
import { Portal } from "react-native-paper";

import NativeIconButton from "./NativeIconButton";
import { __IconTypes } from "../../styledComponents/dataDisplay/SCIcon";
import NativeAvatar from "../dataDisplay/NativeAvatar";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeBox from "../layouts/NativeBox";

export default function NativeImagePicker(props) {
  const {
    onChange, id, formik, value, styleClasses, defaultImage 
  } = props;

  const [localValue, setLocalvalue] = useState(value);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (localValue) {
      if (formik) {
        let filename = localValue?.path?.split("/");

        filename = filename[filename?.length - 1];
        formik?.setFieldValue(id, {
          name: filename,
          size: localValue?.size,
          type: localValue?.mime,
          uri : localValue?.path,
        });
      } else if (onChange) {
        onChange(localValue);
      }
    }
  }, [localValue]);

  useEffect(() => {
    requestCameraPermission();
    requestImagePermission();
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

  const requestImagePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        {
          buttonNegative: "Cancel",
          buttonNeutral : "Ask Me Later",
          buttonPositive: "OK",
          message:
            "Allow needs access to your camera " +
            "so you can take awesome pictures.",
          title: "Allow images Permission",
        }
      );

      // -- console.log("Granted", granted);
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
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          buttonNegative: "Cancel",
          buttonNeutral : "Ask Me Later",
          buttonPositive: "OK",
          message:
            "Allow needs access to your camera " +
            "so you can take awesome pictures.",
          title: "Allow images Permission",
        }
      );

      // -- console.log("Granted", granted);

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // -- console.log("You can use the images");
      } else {
        // -- console.log("images permission denied");
      }
    } catch (err) {
      // -- console.warn(err);
    }
  };

  const pickImage = async (type = "camera") => {
    setModalOpen(false);
    if (type === "camera") {
      ImagePicker.openCamera({
        cropping     : true,
        height       : 400,
        includeBase64: true,
        width        : 300,
      }).then((image) => {
        // -- console.log(image);
        setLocalvalue(image);
      });
    } else {
      ImagePicker.openPicker({
        cropping     : true,
        height       : 400,
        includeBase64: true,
        width        : 300,
      })
        .then((image) => {
          // -- console.log(image);
          setLocalvalue(image);
        })
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {
          // -- console.log(err);
          requestImagePermission();
        });
    }
  };

  // -- console.log("IMAGE VALUES", formik?.values);

  return (
    <NativeBox>
      <Portal>
        <RNModal visible={modalOpen} transparent={true}>
          <SCDialog
            visible={modalOpen}
            onDismiss={() => {
              setModalOpen(false);
            }}
          >
            <NativeTypographyBody1
              styleClasses={[UtilityClasses?.TEXT?.TEXT_CENTER, UtilityClasses?.TEXT?.TEXT_WEIGHT_BOLD]}
            >
              Take/Pick a image
            </NativeTypographyBody1>

            <NativeGrid styleClasses={[UtilityClasses?.MARGIN?.MY5]}>
              <NativeBox gridProps={{ gridSize: 3 }} />

              <NativeBox gridProps={{ gridSize: 3 }}>
                <NativeIconButton
                  size="large"
                  onClick={() => {
                    pickImage("camera");
                  }}
                >
                  <NativeIcon
                    styleClasses={[UtilityClasses?.COLOR?.TEXT_PRIMARY_DARK]}
                    size="medium"
                    type={__IconTypes?.MATERIAL_ICON}
                    childrenFlag={true}
                    name="add-a-photo"
                  />
                </NativeIconButton>
              </NativeBox>

              <NativeBox gridProps={{ gridSize: 3 }}>
                <NativeIconButton
                  size="large"
                  onClick={() => {
                    pickImage("gallery");
                  }}
                >
                  <NativeIcon
                    styleClasses={[UtilityClasses?.COLOR?.TEXT_PRIMARY_DARK]}
                    size="medium"
                    type={__IconTypes?.MATERIAL_ICON}
                    childrenFlag={true}
                    name="photo"
                  />
                </NativeIconButton>
              </NativeBox>
            </NativeGrid>
          </SCDialog>
        </RNModal>
      </Portal>

      <NativeBox
        styleClasses={
          styleClasses?.includes(
            UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER
          ) && [UtilityClasses?.FLEX?.DIRECTION_ROW, UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER, UtilityClasses?.PADDING?.PB1]
        }
      >
        <TouchableOpacity
          onPress={() => {
            setModalOpen(true);
          }}
        >
          <NativeAvatar
            styleClasses={styleClasses}
            src={
              value
                ? typeof value === "string"
                  ? value
                  : { uri: `data:${localValue?.mime};base64,${localValue?.data}` }
                : defaultImage
            }
          />
        </TouchableOpacity>
      </NativeBox>
    </NativeBox>
  );
}
