import {
  Routes as NativeDomRoutes,
  Route as NativeDomRoute,
  Navigate as NativeDomNavigate,
  useNavigate as nativeUseNavigate,
  useLocation as nativeUseLocation,
  useParams as nativeUseParams,
  useSearchParams as nativeUseSearchParams,
} from "react-router-native";
import { Linking } from "react-native";

async function nativeOpenUrl(url) {
  Linking.openURL(url).catch((err) => {
    console.error("Failed opening page because: ", err);
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
  nativeOpenUrl,
};
