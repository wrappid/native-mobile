// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useState, useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Button } from "react-native-paper";

// eslint-disable-next-line import/named

export default function NativeGoogleButton() {
  // eslint-disable-next-line no-unused-vars
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     forceCodeForRefreshToken: true,

  //     // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     offlineAccess: true,
  //     webClientId:
  //       "781832069302-vi38c2as26m639ap30pji5i72tj4u8da.apps.googleusercontent.com",
  //   });

  //   isSignedIn();
  // }, []);

  // const signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();

/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Prompts the user to sign in with their Google account.
   *
   * It first checks if the device has Google Play Services installed. If not,
   * it will prompt the user to install it. Once installed, it will prompt the
   * user to select a Google account to sign in with. If the user is already
   * signed in, it will use the most recently signed in user.
   *
   * The user will then be prompted to authorize your app to access their
   * profile information. If they grant access, the method will return with
   * the user's profile information.
   *
   * @returns {Promise<void>}
   * @throws If the user cancels the sign in flow, or if there is an error
   * with the sign in process.
   */
/******  3fcc8d26-6750-4db4-9129-94b9dc419edf  *******/  //     // -- console.log(`userInfo = ${JSON.stringify(userInfo)}`);
  //     // -- console.log("Successfully SignedIn");
  //     //   // -- console.log(`In func signIn, ID Token = ${user.idToken}`);
  //     setUser(userInfo); // use dispatch() to save info
  //   } catch (error) {
  //     // -- console.log(error);
  //     // -- console.log("Message during SignIn", error.message);
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // -- console.log("User Cancelled the Login");
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // -- console.log("SignIn in Progress");
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // -- console.log("During SignIn - Play Services Not Available");
  //       // play services not available or outdated
  //     } else {
  //       // -- console.log("Some other error happened in signIn", error);
  //       // some other error happened
  //     }
  //   }
  // };

  // const isSignedIn = async () => {
  //   const isSignedin = await GoogleSignin.isSignedIn();

  //   // -- console.log(`In func isSignedIn, ID Token = ${user.idToken}`);
  //   if (isSignedin) {
  //     // eslint-disable-next-line no-undef
  //     getCurrentUserInfo();
  //   } else {
  //     // -- console.log("Please Login");
  //   }
  // };

  return (
    // eslint-disable-next-line no-undef
    // <NativeBox style={styles.logIncontainer}>
    //   <NativeButton
    //     // eslint-disable-next-line no-undef
    //     style={styles.googleButtonStyle}
    //     size={GoogleSigninButton.Size.Wide}
    //     color={GoogleSigninButton.Color.Dark}
    //     onPress={signIn}
    //   />
    // </NativeBox>
    // <Button
    //   title={"Sign in with Google"}
    //   onPress={() => {
    //     GoogleSignin.configure({
    //       androidClientId: "ADD_YOUR_ANDROID_CLIENT_ID_HERE",
    //       iosClientId    : "ADD_YOUR_iOS_CLIENT_ID_HERE",
    //     });
    //     GoogleSignin.hasPlayServices().then((hasPlayService) => {
    //       if (hasPlayService) {
    //         GoogleSignin.signIn().then((userInfo) => {
    //           console.log(JSON.stringify(userInfo));
    //         }).catch((e) => {
    //           console.log("ERROR IS: " + JSON.stringify(e));
    //         });
    //       }
    //     }).catch((e) => {
    //       console.log("ERROR IS: " + JSON.stringify(e));
    //     });
    //   }} />
    <Button title={"hello world"}/>
  );
}

// /
// import React, { useEffect } from "react";
// import { View, Button, Alert } from "react-native";
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import { useDispatch } from "react-redux";
// import { apiRequestAction } from "../../../store/action/appActions";
// import { HTTP } from "../../../config/constants";

// const NativeGoogleButton = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Configure Google Sign-In
//     GoogleSignin.configure({
//       webClientId: "YOUR_GOOGLE_WEB_CLIENT_ID", // You can find this in the Google Developer Console
//       offlineAccess: false,
//       hostedDomain: "", // Optional, for G Suite
//       forceCodeForRefreshToken: true,
//     });
//   }, []);

//   const handleGoogleSignIn = async () => {
//     try {
//       const userInfo = await GoogleSignin.signIn();
//       // Handle sign-in success, send token to backend
//       const data = { platformToken: userInfo.idToken };

//       dispatch(
//         apiRequestAction(
//           HTTP.POST,
//           "/login/social/google",
//           false,
//           data,
//           "LOGIN_SUCCESS",
//           "LOGIN_ERROR"
//         )
//       );
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // The user cancelled the sign-in
//         Alert.alert("Sign-In Cancelled");
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // The sign-in is in progress
//         Alert.alert("Sign-In in Progress");
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // Google Play services are not available or outdated
//         Alert.alert("Play Services not available");
//       } else {
//         // Some other error
//         Alert.alert("Error: " + error.message);
//       }
//     }
//   };

//   return (
//     <View>
//       <Button title="Sign In with Google" onPress={handleGoogleSignIn} />
//     </View>
//   );
// };
