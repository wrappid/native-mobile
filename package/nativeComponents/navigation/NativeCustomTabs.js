import React from "react";
import { nativeUseLocation } from "../helper/routerHelper";
import NativeTab from "./NativeTab";

export default function NativeCustomTabs(props) {
  const location = nativeUseLocation();
  const { tabsContent, preHandleChangeHook, postHandleChangeHook } = props;
  const [tabValue, setTabValue] = React.useState(tabsContent[0]?.id || 0);

  React.useEffect(() => {
    if (
      location?.hash &&
      tabsContent?.filter((tabContent) => {
        return tabContent?.id === location?.hash?.replace("#", "");
      })?.length > 0
    ) {
      setTabValue(location.hash?.replace("#", ""));
    } else {
      setTabValue(tabsContent[0]?.id);
    }
  }, [tabsContent, location]);

  const handleChange = (e, value) => {
    preHandleChangeHook && preHandleChangeHook(e, value);
    setTabValue(value);
    postHandleChangeHook && postHandleChangeHook(e, value);
  };
  return (
    <NativeTabs>
      {tabsContent?.map((tabContent, tabIndex) => {
        return (
          <NativeTab key={`Tab-${tabIndex}`} label={tabContent?.label}>
            {React.createElement(
              props.componentRegistry[tabContent.comp]?.comp
            )}
          </NativeTab>
        );
      })}
    </NativeTabs>
  );
}
