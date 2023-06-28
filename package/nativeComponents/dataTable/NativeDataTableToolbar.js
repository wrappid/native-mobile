import React from "react";
import { UtilityClasses } from "@wrappid/styles";
import NativeStack from "../layouts/NativeStack";
import NativeBox from "../layouts/NativeBox";

export default function NativeDataTableToolbar(props) {
  const { allTools, styleClasses } = props;

  return allTools?.map((row) => (
    <NativeBox
      styleClasses={styleClasses}
      style={{ flex: 1, flexDirection: "row" }}
    >
      {!row.hideApp && (
        <NativeBox style={{ flex: 5, flexDirection: "row" }}>
          {row?.leftPanel &&
            !row?.leftPanel?.hideApp &&
            row?.leftPanel?.stacks &&
            row?.leftPanel?.stacks?.map(
              (stack) =>
                !stack.hideApp &&
                stack?.map((element) =>
                  element?.comp && !element.hideApp
                    ? typeof element?.comp === "function"
                      ? element.comp()
                      : element.comp
                    : null
                )
            )}
        </NativeBox>
      )}

      {!row.hideApp && (
        <NativeBox style={{ flex: 1, flexDirection: "row" }}>
          {row?.rightPanel &&
            !row?.rightPanel?.hideApp &&
            row?.rightPanel?.stacks &&
            row?.rightPanel?.stacks?.map(
              (stack) =>
                !stack.hideApp &&
                stack?.map((element) =>
                  element?.comp && !element.hideApp
                    ? typeof element?.comp === "function"
                      ? element.comp()
                      : element.comp
                    : null
                )
            )}
        </NativeBox>
      )}
    </NativeBox>
  ));
}
