import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import { SCAvatarText } from "../../styledComponents/dataDisplay/SCAvatarText";
import { destructureAvatarSizeFromStyles } from "../dataDisplay/NativeAvatar";
import NativeBox from "../layouts/NativeBox";

const DEFAULT_MAX_AVATARS = 5;

export default function NativeAvatarGroup(props) {
  // eslint-disable-next-line no-unused-vars
  const { max, total, children, ...restProps } = props;

  const renderAvatars = (children) => {
    let currentRenderableAvatarMaxValue = props?.max || DEFAULT_MAX_AVATARS;
    let renderableChildren = React.Children.toArray(children);
    let renderableChildrenLength = renderableChildren.length;

    /**
     * @todo
     *
     * 1. check if max exceeded in children array
     */
    if (renderableChildrenLength > currentRenderableAvatarMaxValue) {
      renderableChildren = renderableChildren.slice(
        0,
        currentRenderableAvatarMaxValue - 1
      );
      renderableChildren.push(
        React.createElement(SCAvatarText, {
          label: `+${renderableChildrenLength - renderableChildren.length}`,
          ...destructureAvatarSizeFromStyles(
            renderableChildren[0]?.props?.styleClasses
          ),
        })
      );
    }

    if (
      renderableChildrenLength > currentRenderableAvatarMaxValue &&
      props.total > 0
    ) {
      renderableChildren = renderableChildren.slice(
        0,
        currentRenderableAvatarMaxValue
      );
      renderableChildren.push(
        React.createElement(SCAvatarText, {
          label: `+${
            props?.total
              ? props?.total - currentRenderableAvatarMaxValue
              : renderableChildrenLength - currentRenderableAvatarMaxValue
          }`,
          ...destructureAvatarSizeFromStyles(
            renderableChildren[0]?.props?.styleClasses
          ),
        })
      );
    }

    /**
     * @todo
     *
     * 1. check total children length > props.max && total length > props.total
     * 2. find out total ? total - max : child length - max
     *
     *
     * - case 1
     * total 20
     * max 3
     * avatar children 7
     *
     * show 2 avatar with picture and one with label 20 - 3 + 1
     *
     * - case 2
     * total <>
     * max 6
     * avatar children 10
     *
     * show 5 avatar with picture and one with label 10 - 6 + 1
     *
     *
     * - case 3
     * total <>
     * max <>
     * avatar children 7
     *
     * show 4 avatar with picture and one with label 7 - 5(default max) + 1
     *
     *
     * - case 4
     * total 3
     * max <>
     * avatar children 2
     *
     * show 2 avatar with picture and one with label 3 - 2
     *
     *
     */
    // eslint-disable-next-line etc/no-commented-out-code
    // if(renderableChildrenLength > props.max && renderableChildrenLength > props.total){
    //   renderableChildren.push(
    //     React.createElement(SCAvatarText, {
    //       label: `+${props?.total ? props?.total - DEFAULT_MAX_AVATARS : renderableChildrenLength - DEFAULT_MAX_AVATARS}`,
    //       ...destructureAvatarSizeFromStyles(
    //         renderableChildren[0]?.props?.styleClasses
    //       ),
    //     })
    //   );
    // };

    // eslint-disable-next-line no-unused-vars
    return renderableChildren.reverse().map((child, index) => {
      return React.cloneElement(child, { styleClasses: [UtilityClasses.MARGIN.MR_N1, UtilityClasses.BORDER.BORDER_WHITE, UtilityClasses.BG.BG_GREY_500] });
    });
  };

  return (
    <NativeBox
      styleClasses={[UtilityClasses.DISPLAY.FLEX, UtilityClasses.FLEX.DIRECTION_ROW_REVERSE]}
    >
      {renderAvatars(props.children)}
    </NativeBox>
  );
}
