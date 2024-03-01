// eslint-disable-next-line import/namespace
import { Linking } from "react-native";
import {
  Routes as NativeDomRoutes,
  Route as NativeDomRoute,
  Navigate as NativeDomNavigate,
  useNavigate as nativeUseNavigate,
  useLocation as nativeUseLocation,
  useParams as nativeUseParams,
  useSearchParams as nativeUseSearchParams
} from "react-router-native";

// eslint-disable-next-line no-unused-vars
async function nativeOpenUrl(url) {
  // eslint-disable-next-line no-unused-vars
  Linking.openURL(url).catch((err) => {
    // -- console.error("Failed opening page because: ", err);
    alert("Failed to open page");
  });
}

export {
  nativeUseNavigate,
  nativeUseLocation,
  NativeDomRoutes,
  NativeDomRoute,
  NativeDomNavigate,
  nativeUseParams,
  nativeUseSearchParams,
  nativeOpenUrl
};
