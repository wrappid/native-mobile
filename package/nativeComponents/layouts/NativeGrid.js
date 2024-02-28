import { Children, useState, useEffect, useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { ThemeContext } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { Dimensions } from "react-native";

import { getUUID } from "../../helper/appUtils";
import { getGridSizeProps } from "../../helper/componentUtil";
import { SCGrid } from "../../styledComponents/layouts/SCGrid";
import { SCGridItem } from "../../styledComponents/layouts/SCGridItem";

export default function NativeGrid(props) {
  const { spacing } = props;
  let padding = spacing !== null && spacing !== undefined ? spacing * 4 : 4;

  const [_uuid, setUuid] = useState(null);
  const [containerId, setContainerId] = useState(null);
  const theme = useContext(ThemeContext);

  useEffect(()=>{
    setUuid(getUUID());
    setContainerId(props?.coreId ? "gc_" + props.coreId : "gc_" + _uuid);
  }, []);

  let windowWidth = Dimensions.get("window").width;

  const gridToWidth = gridProps => {
    const sizeProps = getGridSizeProps(gridProps);
    let gridSize = sizeProps.xs;

    if (windowWidth >= theme?.breakpoints?.values?.sm) {
      gridSize = sizeProps.sm;
    }
    if (windowWidth >= theme?.breakpoints?.values?.md) {
      gridSize = sizeProps.md;
    }
    if (windowWidth >= theme?.breakpoints?.values?.lg) {
      gridSize = sizeProps.lg;
    }
    if (windowWidth >= theme?.breakpoints?.values?.xl) {
      gridSize = sizeProps.xl;
    }
    let width_percent = gridSizeToPercentage(gridSize);

    return { width: width_percent };
  };

  const gridSizeToPercentage = (gridSize = 12) => {
    return (100 / 12) * gridSize + "%";
  };

  return (
    <SCGrid
      key={containerId}
      container={props?.container || true}
      item={props?.item || false}
      style={{ flexDirection: "row", flexWrap: "wrap", marginLeft: -1 * padding }}
      styleClasses={props?.styleClasses || []}>
      {props.children &&
        Children.toArray(props.children).map((child, index) => (
          <SCGridItem
            item
            key={index}
            style={{
              ...(gridToWidth(child?.props?.gridProps?.gridSize) || {}),
              paddingLeft: padding,
              paddingTop : padding,
            }}>
            {child}
          </SCGridItem>
        ))}
    </SCGrid>
  );
}
