import { useEffect, useState } from "react";

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

