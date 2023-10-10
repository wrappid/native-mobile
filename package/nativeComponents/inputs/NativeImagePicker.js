import React, {useEffect, useState} from 'react';
import {TouchableOpacity, PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import NativeBox from '../layouts/NativeBox';
import NativeAvatar from '../dataDisplay/NativeAvatar';
import NativeIconButton from './NativeIconButton';
import NativeIcon from '../dataDisplay/NativeIcon';
import {__IconTypes} from '../../styledComponents/dataDisplay/SCIcon';
import {UtilityClasses} from '@wrappid/styles';
import {Modal as RNModal} from 'react-native';
import {Portal} from 'react-native-paper';
import {SCDialog} from '@wrappid/native/styledComponents/feedback/SCDialog';
import {NativeGrid, NativeTypographyBody1} from '@wrappid/native';

export default function NativeImagePicker(props) {
  const {onChange, id, formik, value, styleClasses, defaultImage} = props;

  const [localValue, setLocalvalue] = useState(value);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (localValue) {
      if (formik) {
        let filename = localValue?.path?.split('/');
        filename = filename[filename?.length - 1];
        formik?.setFieldValue(id, {
          type: localValue?.mime,
          uri: localValue?.path,
          size: localValue?.size,
          name: filename,
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
          title: 'Allow Camera Permission',
          message:
            'Allow access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestImagePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        {
          title: 'Allow images Permission',
          message:
            'Allow needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('Granted', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the images');
      } else {
        console.log('images permission denied');
      }
    } catch (err) {
      console.warn(err);
    }

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Allow images Permission',
          message:
            'Allow needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('Granted', granted);

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the images');
      } else {
        console.log('images permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const pickImage = async (type = 'camera') => {
    setModalOpen(false);
    if (type === 'camera') {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
      }).then(image => {
        console.log(image);
        setLocalvalue(image);
      });
    } else {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
      })
        .then(image => {
          console.log(image);
          setLocalvalue(image);
        })
        .catch(err => {
          console.log(err);
          requestImagePermission();
        });
    }
  };

  console.log('IMAGE VALUES', formik?.values);

  return (
    <NativeBox>
      <Portal>
        <RNModal visible={modalOpen} transparent={true}>
          <SCDialog
            visible={modalOpen}
            onDismiss={() => {
              setModalOpen(false);
            }}>
            <NativeTypographyBody1
              styleClasses={[
                UtilityClasses?.TEXT?.TEXT_CENTER,
                UtilityClasses?.TEXT?.TEXT_WEIGHT_BOLD,
              ]}>
              Take/Pick a image
            </NativeTypographyBody1>
            <NativeGrid styleClasses={[UtilityClasses?.MARGIN?.MY5]}>
              <NativeBox gridProps={{gridSize: 3}} />
              <NativeBox gridProps={{gridSize: 3}}>
                <NativeIconButton
                  size="large"
                  onClick={() => {
                    pickImage('camera');
                  }}>
                  <NativeIcon
                    styleClasses={[UtilityClasses?.COLOR?.TEXT_PRIMARY_DARK]}
                    size="medium"
                    type={__IconTypes?.MATERIAL_ICON}
                    childrenFlag={true}
                    name="add-a-photo"
                  />
                </NativeIconButton>
              </NativeBox>
              <NativeBox gridProps={{gridSize: 3}}>
                <NativeIconButton
                  size="large"
                  onClick={() => {
                    pickImage('gallery');
                  }}>
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
            UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER,
          ) && [
            UtilityClasses?.FLEX?.DIRECTION_ROW,
            UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER,
            UtilityClasses?.PADDING?.PB1,
          ]
        }>
        <TouchableOpacity
          onPress={() => {
            setModalOpen(true);
          }}>
          <NativeAvatar
            styleClasses={styleClasses}
            src={
              value
                ? typeof value === 'string'
                  ? value
                  : {uri: `data:${localValue?.mime};base64,${localValue?.data}`}
                : defaultImage
            }
          />
        </TouchableOpacity>
      </NativeBox>
    </NativeBox>
  );
}
