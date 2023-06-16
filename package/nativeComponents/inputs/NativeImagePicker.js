import React, { useEffect, useState } from 'react';
import NativeOutlinedButton from './NativeOutlinedButton';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import NativeModal from '../utils/NativeModal';
import NativeTextButton from './NativeTextButton';
import NativeBox from '../layouts/NativeBox';

export default function NativeImagePicker(props) {
  const { onChange, id, formik, value } = props;

  const [localValue, setLocalvalue] = useState(value);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (localValue) {
      formik?.setFieldValue(id, localValue);
      if (onChange) {
        onChange(localValue);
      }
    }
  }, [localValue]);

  // const pickImage = async (type = 'camera') => {
  //   setModalOpen(false);
  //   if (type === 'camera') {
  //     launchCamera({})
  //       .then(image => {
  //         setLocalvalue(image.assets[0]);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   } else {
  //     launchImageLibrary({})
  //       .then(image => {
  //         setLocalvalue(image.assets[0]);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
  // };

  const pickImage = async (type = 'camera') => {
    setModalOpen(false);
    if (type === 'camera') {
      ImagePicker.launchCamera({}, response => {
        if (!response.didCancel) {
          setLocalvalue(response.assets[0]);
        }
      });
    } else {
      ImagePicker.launchImageLibrary({}, response => {
        if (!response.didCancel) {
          setLocalvalue(response.assets[0]);
        }
      });
    }
  };

  return (
    <NativeBox>
      <NativeModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}>
        <NativeTextButton
          label="Camera"
          OnClick={() => {
            pickImage('camera');
          }}
        />
        <NativeTextButton
          label="Gallery"
          OnClick={() => {
            pickImage('gallery');
          }}
        />
      </NativeModal>
      <NativeOutlinedButton
        label="Pick Image"
        OnClick={() => {
          setModalOpen(true);
        }}
      />
    </NativeBox>
  );
}
