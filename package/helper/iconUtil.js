import { createIconSetFromIcoMoon } from "react-native-vector-icons";

export function overrideCustomIcons(customIconJsons) {
  let iconOb = {};
  let iconLibraries = Object.keys(customIconJsons);

  for (let i = 0; i < iconLibraries.length; i++) {
    iconOb[iconLibraries[i]] = createIconSetFromIcoMoon(
      customIconJsons[iconLibraries[i]]
    );
  }
  return iconOb;
}
