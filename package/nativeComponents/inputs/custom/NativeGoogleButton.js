// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useState, useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
  // eslint-disable-next-line import/no-unresolved
} from "@react-native-google-signin/google-signin";

// eslint-disable-next-line import/named
import { NativeBox } from "../../layouts/NativeBox";

export default function NativeGoogleButton() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({});

  useEffect(() => {
    GoogleSignin.configure({
      // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true,

      // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true,
      webClientId:
        "781832069302-vi38c2as26m639ap30pji5i72tj4u8da.apps.googleusercontent.com",
    });

    isSignedIn();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      // -- console.log(`userInfo = ${JSON.stringify(userInfo)}`);
      // -- console.log("Successfully SignedIn");
      //   // -- console.log(`In func signIn, ID Token = ${user.idToken}`);
      setUser(userInfo); // use dispatch() to save info
    } catch (error) {
      // -- console.log(error);
      // -- console.log("Message during SignIn", error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // -- console.log("User Cancelled the Login");
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // -- console.log("SignIn in Progress");
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // -- console.log("During SignIn - Play Services Not Available");
        // play services not available or outdated
      } else {
        // -- console.log("Some other error happened in signIn", error);
        // some other error happened
      }
    }
  };

  const isSignedIn = async () => {
    const isSignedin = await GoogleSignin.isSignedIn();

    // -- console.log(`In func isSignedIn, ID Token = ${user.idToken}`);
    if (isSignedin) {
      // eslint-disable-next-line no-undef
      getCurrentUserInfo();
    } else {
      // -- console.log("Please Login");
    }
  };

  return (
    // eslint-disable-next-line no-undef
    <NativeBox style={styles.logIncontainer}>
      <GoogleSigninButton
        // eslint-disable-next-line no-undef
        style={styles.googleButtonStyle}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </NativeBox>
  );
}
