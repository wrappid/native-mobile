// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import NativeTab from "./NativeTab";
import NativeTabs from "./NativeTabs";
import { nativeUseLocation } from "../helper/routerHelper";

export default function NativeCustomTabs(props) {
  const location = nativeUseLocation();
  const { tabsContent, preHandleChangeHook, postHandleChangeHook } = props;
  // eslint-disable-next-line no-unused-vars
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

  // eslint-disable-next-line no-unused-vars
  const handleChange = (ele, value) => {
    preHandleChangeHook && preHandleChangeHook(ele, value);
    setTabValue(value);
    postHandleChangeHook && postHandleChangeHook(ele, value);
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
