// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useContext, useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { nativeUseLocation } from "@wrappid/native";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses, WrappidDataContext } from "@wrappid/styles";
import {
  BackHandler,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView
  // eslint-disable-next-line import/namespace
} from "react-native";

import NativeBox from "./NativeBox";
import { nativeUseNavigate } from "../helper/routerHelper";

export default function NativePageContainer(props) {
  const config = useContext(WrappidDataContext)?.config;
  const location = nativeUseLocation();
  const { uid } = props;
  /**
   * @todo scroll view is used in page container should be removed
   * when flatlist used but this is causing children in pages being
   * overlapped that's why created a bounding box with fixed height
   * in flat list for data table
   */
  // eslint-disable-next-line no-unused-vars
  const windowHeight = Dimensions.get("window").height;
  // eslint-disable-next-line no-unused-vars
  const DEFAULT_APP_BAR_HEIGHT = 64;

  const navigate = nativeUseNavigate();

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);

  const handleBackButtonClick = () => {
    if(uid && location?.pathname !== "/" + config?.defaultAuthenticatedRoute){
      navigate("/" + config?.defaultAuthenticatedRoute);
      return true;
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        keyboardShouldPersistTaps={"always"}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <NativeBox
          styleClasses={[UtilityClasses?.BG?.BG_WHITE, UtilityClasses?.HEIGHT?.H_100]}
        >
          {props.children}
        </NativeBox>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
