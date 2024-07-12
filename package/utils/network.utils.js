// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React, { useEffect, useState } from "react";

import { addEventListener } from "@react-native-community/netinfo";

export const useNetworkStatus = () => {
  const [netInfo, setNetInfo] = useState(true);

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      setNetInfo(state?.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return netInfo;
};

