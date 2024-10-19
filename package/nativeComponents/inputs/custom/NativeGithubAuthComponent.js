import React, { useEffect, useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { Linking, TouchableOpacity } from "react-native";

import NativeIcon from "../../dataDisplay/NativeIcon";

// eslint-disable-next-line etc/no-commented-out-code
// const GITHUB_ICON_URL = "https://www.svgrepo.com/show/512317/github-142.svg";

export default function NativeGithubAuthComponent({ onAuthCodeReceived, ...props }) {
  const { config } = React.useContext(WrappidDataContext);
  const [github_code, setGithub_code] = useState("");

  useEffect(() => {
    const handleDeepLink = (event) => {
      const { url } = event;
      const code = url.match(/code=([^&]*)/);

      if (code && code[1]) {
        setGithub_code(code[1]);
      }
    };

    Linking.addEventListener("url", handleDeepLink);
    return () => {
      Linking.removeEventListener("url", handleDeepLink);
    };
  }, []);

  useEffect(() => {
    if (github_code === "") return;
    onAuthCodeReceived(github_code);
    setGithub_code("");
  }, [github_code, onAuthCodeReceived]);

  const handleAuthoriseGithub = async () => {
    const clientId = config.wrappid.socialLogin.github.clientId;
    const redirectUri = config.wrappid.socialLogin.github.redirectUri;
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo,discussions,read:user,user:email`;

    const supported = await Linking.canOpenURL(authUrl);

    if (supported) {
      await Linking.openURL(authUrl);
    } else {
      // eslint-disable-next-line no-console
      console.error("Don't know how to open URI: " + authUrl);
    }
  };

  return (
    <TouchableOpacity onPress={handleAuthoriseGithub} {...props}>
      <NativeIcon type="far" name="fa-brands fa-github" childrenFlag={true} />
    </TouchableOpacity>
  );
}