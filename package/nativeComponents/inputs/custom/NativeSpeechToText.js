import { useState, useEffect } from "react";

import Voice from "@react-native-voice/voice";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeIcon from "../../dataDisplay/NativeIcon";
import NativeTypographyBody1 from "../../dataDisplay/paragraph/NativeTypographyBody1";
import NativeBox from "../../layouts/NativeBox";
import NativeFullModal from "../../utils/NativeFullModal";
import NativeIconButton from "../NativeIconButton";

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
    mode,
    children,
  } = props;

  const [pitch, setPitch] = useState("");
  const [error, setError] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [end, setEnd] = useState(false);

  const [started, setStarted] = useState(false);
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);

  const [open, setModal] = useState([]);

  useEffect(() => {
    //Setting callbacks for the process status
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
      generateCoreForm([...results]);
    }
  }, [results]);

  const onSpeechStart = event => {
    //Invoked when .start() is called without error
    if (afterSpeechStart && typeof afterSpeechStart === "function") {
      afterSpeechStart(event);
    }
  };

  const onSpeechEnd = async event => {
    //Invoked when SpeechRecognizer stops recognition
    if (beforeSpeechEnd && typeof beforeSpeechEnd === "function") {
      beforeSpeechStart(event);
    }

    setEnd(true);
    setStarted(false);
    if (afterSpeechEnd && typeof afterSpeechEnd === "function") {
      afterSpeechStart(event);
    }
  };

  const onSpeechError = event => {
    //Invoked when an error occurs.
    if (beforeSpeechError && typeof beforeSpeechError === "function") {
      beforeSpeechError(event);
    }
    setError(JSON.stringify(event.error));
    setEnd(false);
    if (afterSpeechError && typeof afterSpeechError === "function") {
      afterSpeechError(event);
    }
  };

  const onSpeechResults = event => {
    //Invoked when SpeechRecognizer is finished recognizing
    let value = event.value;

    if (beforeSpeechResults && typeof beforeSpeechResults === "function") {
      value = beforeSpeechResults(value);
    }
    setResults(value);
    if (afterSpeechResults && typeof afterSpeechResults === "function") {
      value = afterSpeechResults(value);
    }
  };

  const onSpeechPartialResults = event => {
    //Invoked when any results are computed
    if (
      beforeSpeechPartialResults &&
      typeof beforeSpeechPartialResults === "function"
    ) {
      beforeSpeechPartialResults(event.value);
    }
    setPartialResults(event.value);
    if (
      afterSpeechPartialResults &&
      typeof afterSpeechPartialResults === "function"
    ) {
      afterSpeechPartialResults(event.value);
    }
  };

  const onSpeechVolumeChanged = event => {
    //Invoked when pitch that is recognized changed
    // -- console.log('onSpeechVolumeChanged: ', event);
    if (
      beforeSpeechVolumeChange &&
      typeof beforeSpeechVolumeChange === "function"
    ) {
      beforeSpeechVolumeChange(event.value);
    }
    setPitch(event.value);
    if (
      afterSpeechVolumeChange &&
      typeof afterSpeechVolumeChange === "function"
    ) {
      afterSpeechVolumeChange(event.value);
    }
  };

  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    // -- console.log("Started");
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    try {
      setModal(true);
      setEnd(false);
      setStarted(true);
      setPitch("");
      setError(null);
      setResults([]);
      setPartialResults([]);
      if (beforeSpeechStart && typeof beforeSpeechStart === "function") {
        beforeSpeechStart();
      }
      await Voice.start(element?.speechToText?.locale || "en-US");
    } catch (event) {
      // -- console.error(event);
    }
  };

  const stopRecognizing = async () => {
    // -- console.log("Stopped");
    //Stops listening for speech
    try {
      setStarted(false);
      setEnd(false);
      await Voice.stop();
    } catch (event) {
      // -- console.error(event);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const cancelRecognizing = async () => {
    //Cancels the speech recognition
    try {
      await Voice.cancel();
    } catch (event) {
      // -- console.error(event);
    }
  };

  const destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    // -- console.log("Destroyed");
    setModal(false);
    setPitch("");
    setError(null);
    setStarted(false);
    setResults([]);
    setPartialResults([]);
    setEnd(false);
    try {
      await Voice.destroy();
    } catch (event) {
      // -- console.error(event);
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
        open={open}
        onClose={destroyRecognizer}
        top={50}
        styleClasses={
          !mode || mode === "dark"
            ? [UtilityClasses?.BG?.BG_BLACK, UtilityClasses?.OPACITY?.OPACITY_75]
            : [UtilityClasses?.BG?.BG_WHITE]
        }
        searchBox={false}>
        <NativeBox
          style={{ flex: 1 }}
          styleClasses={[UtilityClasses?.HEIGHT?.H_100]}>
          <NativeBox
            styleClasses={[UtilityClasses?.HEIGHT?.H_25]}
            style={{ flex: 2 }}>
            {/* {started && !end && ( */}
            <NativeBox
              styleClasses={[UtilityClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER]}>
              <NativeTypographyBody1
                styleClasses={[UtilityClasses?.TEXT?.TEXT_CENTER]}>
                {error
                  ? "Try Again"
                  : started
                    ? "Listening..."
                    : "Tap to speak..."}
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
                onClick={!started ? startRecognizing : stopRecognizing}>
                <NativeIcon
                  styleClasses={[UtilityClasses?.COLOR?.TEXT_PRIMARY]}
                  size="large"
                  childrenFlag={true}
                  name={!started ? "mic" : "stop"}
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
                key={"results-" + index}
                styleClasses={[UtilityClasses?.TEXT?.TEXT_CENTER]}>
                {result}
              </NativeTypographyBody1>
            ))}
          </NativeBox>

          {
            <NativeBox
              styleClasses={[UtilityClasses?.HEIGHT?.H_75, UtilityClasses?.PADDING?.P1]}
              style={{ flex: 4 }}>
              {children}
            </NativeBox>
          }
        </NativeBox>
      </NativeFullModal>
    </>
  );
};

export default NativeSpeechToText;
