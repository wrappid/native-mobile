import { useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeSpan from "../../layouts/NativeSpan";
import NativeLink from "../../navigation/NativeLink";
import NativeTypography from "../NativeTypography";

export default function NativeTypographyCaption(props) {
  const { hideSeeMore = false, limitChars, styleClasses } = props;

  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return limitChars ? (
    <NativeTypography {...props} variant="caption" gutterBottom>
      <NativeSpan styleClasses={[...(styleClasses || [])]}>
        {typeof props?.children === "string" && seeMore
          ? limitChars > props?.children?.length
            ? props?.children
            : props?.children.slice(0, limitChars) + "..."
          : props?.children}
      </NativeSpan>

      {!hideSeeMore && limitChars < props?.children?.length && (
        <NativeLink
          styleClasses={[UtilityClasses.MARGIN.ML1]}
          onClick={toggleSeeMore}
        >
          {seeMore ? "See more" : "See less"}
        </NativeLink>
      )}
    </NativeTypography>
  ) : (
    <NativeTypography {...props} variant="caption" gutterBottom>
      {props?.children}
    </NativeTypography>
  );
}
