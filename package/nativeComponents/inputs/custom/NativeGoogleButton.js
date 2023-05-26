import React, { useEffect } from "react";
import { NativeBox } from "../../layouts/NativeBox";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

export default function NativeGoogleButton() {

  const [user, setUser] = useState({});

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "781832069302-vi38c2as26m639ap30pji5i72tj4u8da.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true,
    });

    isSignedIn();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(`userInfo = ${JSON.stringify(userInfo)}`);
      console.log("Successfully SignedIn");
      //   console.log(`In func signIn, ID Token = ${user.idToken}`);
      setUser(userInfo); // use dispatch() to save info
    } catch (error) {
      console.log(error);
      console.log("Message during SignIn", error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User Cancelled the Login");
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("SignIn in Progress");
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("During SignIn - Play Services Not Available");
        // play services not available or outdated
      } else {
        console.log("Some other error happened in signIn", error);
        // some other error happened
      }
    }
  };

  const isSignedIn = async () => {
    const isSignedin = await GoogleSignin.isSignedIn();
    // console.log(`In func isSignedIn, ID Token = ${user.idToken}`);
    if (isSignedin) {
      getCurrentUserInfo();
    } else {
      console.log("Please Login");
    }
  };

  return (
    <NativeBox style={styles.logIncontainer}>
      <GoogleSigninButton
        style={styles.googleButtonStyle}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </NativeBox>
  );
}
