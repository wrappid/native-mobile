import { useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeSpan from "../../layouts/NativeSpan";
import NativeLink from "../../navigation/NativeLink";
import NativeTypography from "../NativeTypography";

function NativeTypographyBody1(props) {
  const { hideSeeMore = false, limitChars } = props;
  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return props?.limitChars ? (
    <NativeTypography {...props} variant="body1" gutterBottom>
      {/* eslint-disable-next-line no-undef */}
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
    <NativeTypography {...props} variant="body1" gutterBottom>
      {props?.children}
    </NativeTypography>
  );
}

export default NativeTypographyBody1;
