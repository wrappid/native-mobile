import React, {useState, useEffect} from 'react';
// https://www.npmjs.com/package/@react-native-voice/voice?activeTab=readme#api
import Voice from '@react-native-voice/voice';
import NativeIconButton from '../NativeIconButton';
import NativeIcon from '../../dataDisplay/NativeIcon';
import NativeFullModal from '../../utils/NativeFullModal';
import NativeBox from '../../layouts/NativeBox';
import NativeTypographyBody1 from '../../dataDisplay/paragraph/NativeTypographyBody1';
import {UtilityClasses} from '@wrappid/styles';

const NativeSpeechToText = props => {
  const {
    element,
    beforeSpeechStart,
    afterSpeechStart,
    beforeSpeechEnd,
    afterSpeechEnd,
    beforeSpeechResults,
    afterSpeechResults,
    beforeSpeechError,
    afterSpeechError,
    beforeSpeechPartialResults,
    afterSpeechPartialResults,
    beforeSpeechVolumeChange,
    afterSpeechVolumeChange,
    disabled,
    processComplete,
    setProcessComplete,
    buttonStyle,
    generateCoreForm,
    formData,
    mode
  } = props;

  const [pitch, setPitch] = useState('');
  const [error, setError] = useState(null);
  const [end, setEnd] = useState(false);
  const [started, setStarted] = useState(false);
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);

  useEffect(() => {
    //Setting callbacks for the process status
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  useEffect(() => {
    if (processComplete) {
      setProcessComplete && setProcessComplete(false);
      destroyRecognizer();
    }
  }, [processComplete]);

  useEffect(() => {
    if (results && results?.length > 0) {
      generateCoreForm(element, results);
    }
  }, [results]);

  const onSpeechStart = e => {
    //Invoked when .start() is called without error
    console.log('onSpeechStart: ', e);
    if (beforeSpeechStart && typeof beforeSpeechStart === 'function') {
      beforeSpeechStart(e);
    }
    setStarted(true);
    if (afterSpeechStart && typeof afterSpeechStart === 'function') {
      afterSpeechStart(e);
    }
  };

  const onSpeechEnd = e => {
    //Invoked when SpeechRecognizer stops recognition
    console.log('onSpeechEnd: ', e);
    if (beforeSpeechEnd && typeof beforeSpeechEnd === 'function') {
      beforeSpeechStart(e);
    }
    setEnd(true);
    if (afterSpeechEnd && typeof afterSpeechEnd === 'function') {
      afterSpeechStart(e);
    }
  };

  const onSpeechError = e => {
    //Invoked when an error occurs.
    console.log('onSpeechError: ', e);
    if (beforeSpeechError && typeof beforeSpeechError === 'function') {
      beforeSpeechError(e);
    }
    setError(JSON.stringify(e.error));
    if (afterSpeechError && typeof afterSpeechError === 'function') {
      afterSpeechError(e);
    }
  };

  const onSpeechResults = e => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e);
    let value = e.value;
    if (beforeSpeechResults && typeof beforeSpeechResults === 'function') {
      value = beforeSpeechResults(value);
    }
    setResults(value);
    if (afterSpeechResults && typeof afterSpeechResults === 'function') {
      value = afterSpeechResults(value);
    }
  };

  const onSpeechPartialResults = e => {
    //Invoked when any results are computed
    console.log('onSpeechPartialResults: ', e);
    if (
      beforeSpeechPartialResults &&
      typeof beforeSpeechPartialResults === 'function'
    ) {
      beforeSpeechPartialResults(e.value);
    }
    setPartialResults(e.value);
    if (
      afterSpeechPartialResults &&
      typeof afterSpeechPartialResults === 'function'
    ) {
      afterSpeechPartialResults(e.value);
    }
  };

  const onSpeechVolumeChanged = e => {
    //Invoked when pitch that is recognized changed
    // console.log('onSpeechVolumeChanged: ', e);
    if (
      beforeSpeechVolumeChange &&
      typeof beforeSpeechVolumeChange === 'function'
    ) {
      beforeSpeechVolumeChange(e.value);
    }
    setPitch(e.value);
    if (
      afterSpeechVolumeChange &&
      typeof afterSpeechVolumeChange === 'function'
    ) {
      afterSpeechVolumeChange(e.value);
    }
  };

  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    try {
      setStarted(true);
      await Voice.start(element?.speechToText?.locale || 'en-US');
      setPitch('');
      setError(null);
      setResults([]);
      setPartialResults([]);
      setEnd(false);
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    //Cancels the speech recognition
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
      setPitch('');
      setError(null);
      setStarted(false);
      setResults([]);
      setPartialResults([]);
      setEnd(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <NativeIconButton
        styleClasses={buttonStyle}
        disabled={disabled}
        onClick={startRecognizing}>
        <NativeIcon
          styleClasses={buttonStyle}
          childrenFlag={true}
          name="mic"
          type="material-icons"
        />
      </NativeIconButton>
      <NativeFullModal
        open={started}
        onClose={destroyRecognizer}
        top={50}
        styleClasses={!mode || mode === "dark"?[
          UtilityClasses?.BG?.BG_BLACK,
          UtilityClasses?.OPACITY?.OPACITY_75,
        ]
        :
        [
          UtilityClasses?.BG?.BG_WHITE,
        ]
      
      }
        searchBox={false}>
        <NativeBox
          style={{flex: 1}}
          styleClasses={[UtilityClasses?.HEIGHT?.H_100]}>
          <NativeBox
            styleClasses={[UtilityClasses?.HEIGHT?.H_25]}
            style={{flex: 2}}>
            {/* {started && !end && ( */}
            <NativeBox
              styleClasses={[UtilityClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER]}>
              <NativeTypographyBody1
                styleClasses={[UtilityClasses?.TEXT?.TEXT_CENTER]}>
                {error ? 'Try Again' : 'Listening...'}
              </NativeTypographyBody1>
              <NativeTypographyBody1
                styleClasses={[UtilityClasses?.TEXT?.TEXT_CENTER]}>
                {pitch}
              </NativeTypographyBody1>
              {error && (
                <NativeTypographyBody1
                  styleClasses={[UtilityClasses?.TEXT?.TEXT_CENTER]}>
                  {error}
                </NativeTypographyBody1>
              )}
              <NativeIconButton
                size="large"
                onClick={error || end ? startRecognizing : stopRecognizing}>
                <NativeIcon
                  styleClasses={[UtilityClasses?.COLOR?.TEXT_PRIMARY]}
                  size="large"
                  childrenFlag={true}
                  name={error || end ? 'mic' : 'stop'}
                  type="material-icons"
                />
              </NativeIconButton>
              <NativeBox>
                {partialResults?.map((result, index) => {
                  return (
                    <NativeTypographyBody1
                      styleClasses={[UtilityClasses?.TEXT?.TEXT_CENTER]}
                      key={`partial-result-${index}`}>
                      {result}
                    </NativeTypographyBody1>
                  );
                })}
              </NativeBox>
            </NativeBox>

            {results?.map((result, index) => (
              <NativeTypographyBody1
                key={'results-' + index}
                styleClasses={[UtilityClasses?.TEXT?.TEXT_CENTER]}>
                {result}
              </NativeTypographyBody1>
            ))}
          </NativeBox>
          {formData && end && (
            <NativeBox
              styleClasses={[
                UtilityClasses?.HEIGHT?.H_75,
                UtilityClasses?.PADDING?.P1,
              ]}
              style={{flex: 4}}>
              {formData.form}
            </NativeBox>
          )}
        </NativeBox>
      </NativeFullModal>
    </>
  );
};

export default NativeSpeechToText;
