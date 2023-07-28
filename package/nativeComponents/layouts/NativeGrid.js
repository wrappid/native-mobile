import React, {Children} from 'react';
import {SCGrid} from '../../styledComponents/layouts/SCGrid';
import {SCGridItem} from '../../styledComponents/layouts/SCGridItem';
import {getUUID} from '../../helper/appUtils';
import {getGridSizeProps} from '../../helper/componentUtil';
import {Dimensions} from 'react-native';
import {
  LARGE_WINDOW_WIDTH,
  MEDIUM_WINDOW_WIDTH,
  SMALL_WINDOW_WIDTH,
  X_LARGE_WINDOW_WIDTH,
} from '../../helper/constants';

export default function NativeGrid(props) {
  const {spacing} = props;
  let padding = spacing !== null && spacing !== undefined ? spacing * 4 : 4;
  let _uuid = null;
  React.useEffect(() => {
    _uuid = getUUID();
  }, []);

  var containerId = props?.coreId ? 'gc_' + props.coreId : 'gc_' + _uuid;

  let windowWidth = Dimensions.get('window').width;

  const gridToWidth = gridProps => {
    const sizeProps = getGridSizeProps(gridProps);
    let gridSize = sizeProps.xs;
    if (windowWidth >= SMALL_WINDOW_WIDTH) {
      gridSize = sizeProps.sm;
    }
    if (windowWidth >= MEDIUM_WINDOW_WIDTH) {
      gridSize = sizeProps.md;
    }
    if (windowWidth >= LARGE_WINDOW_WIDTH) {
      gridSize = sizeProps.lg;
    }
    if (windowWidth >= X_LARGE_WINDOW_WIDTH) {
      gridSize = sizeProps.xl;
    }
    let width_percent = gridSizeToPercentage(gridSize);
    return {width: width_percent};
  };

  const gridSizeToPercentage = (gridSize = 12) => {
    return (100 / 12) * gridSize + '%';
  };

  return (
    <SCGrid
      key={containerId}
      container={props?.container || true}
      item={props?.item || false}
      style={{flexDirection: 'row', flexWrap: 'wrap'}}
      styleClasses={props?.styleClasses || []}>
      {props.children &&
        Children.toArray(props.children).map((child, index) => (
          <SCGridItem
            item
            key={index}
            style={{
              ...(gridToWidth(child?.props?.gridProps?.gridSize) || {}),
              paddingLeft: padding,
              paddingTop: padding,
            }}>
            {child}
          </SCGridItem>
        ))}
    </SCGrid>
  );
}
