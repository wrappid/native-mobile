// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React, { useState, useEffect } from "react";

import { addEventListener } from "@react-native-community/netinfo";
import Snackbar from "react-native-snackbar";

const NativeNetworkStatus = () => {
  // eslint-disable-next-line no-unused-vars
  const [isOffline, setIsOffline] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      setIsOffline(!state.isConnected);
      if (!state.isConnected) {
        setSnackbarVisible(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (snackbarVisible) {
      isOffline ? 
        Snackbar.show({
          duration: Snackbar.LENGTH_INDEFINITE,
          text    : "🔴 You are offline!",
        }) :
        Snackbar.show({
          duration: Snackbar.LENGTH_LONG,
          text    : "🟢 You are online!",
        });
    }});

  return null; // This component doesn't render anything in the UI
};

export default NativeNetworkStatus;