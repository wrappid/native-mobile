import Clipboard from "@react-native-clipboard/clipboard";

/**
 * Copy text to clipboard
 * 
 * @todo need to handle error cases
 * 
 * @param {*} text 
 * @returns boolean
 */
export async function native_copyToClipboard(text) {
  Clipboard.setString(text);
  return true;
}