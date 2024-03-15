import {
  FORM_LG_DEFAULT_GRID_SIZE,
  FORM_MD_DEFAULT_GRID_SIZE,
  FORM_SM_DEFAULT_GRID_SIZE,
  FORM_XL_DEFAULT_GRID_SIZE,
  FORM_XS_DEFAULT_GRID_SIZE
} from "../form/nativeFormConstants";

const XS_DEFAULT_GRID_SIZE = 12;
const SM_DEFAULT_GRID_SIZE = 12;
const MD_DEFAULT_GRID_SIZE = 12;
const LG_DEFAULT_GRID_SIZE = 12;
const XL_DEFAULT_GRID_SIZE = 12;

export function getGridSizeProps(gridSize, formFlag) {
  let finalProps = {
    lg: formFlag ? FORM_LG_DEFAULT_GRID_SIZE : LG_DEFAULT_GRID_SIZE,
    md: formFlag ? FORM_MD_DEFAULT_GRID_SIZE : MD_DEFAULT_GRID_SIZE,
    sm: formFlag ? FORM_SM_DEFAULT_GRID_SIZE : SM_DEFAULT_GRID_SIZE,
    xl: formFlag ? FORM_XL_DEFAULT_GRID_SIZE : XL_DEFAULT_GRID_SIZE,
    xs: formFlag ? FORM_XS_DEFAULT_GRID_SIZE : XS_DEFAULT_GRID_SIZE,
  };

  if (gridSize && !isNaN(gridSize)) {
    finalProps = {
      lg: gridSize,
      md: gridSize,
      sm: gridSize,
      xl: gridSize,
      xs: gridSize,
    };
  } else if (gridSize) {
    if (gridSize.xs) {
      finalProps = {
        lg: gridSize.xs,
        md: gridSize.xs,
        sm: gridSize.xs,
        xl: gridSize.xs,
        xs: gridSize.xs,
      };
    }
    if (gridSize.sm) {
      finalProps = {
        ...finalProps,
        lg: gridSize.sm,
        md: gridSize.sm,
        sm: gridSize.sm,
        xl: gridSize.sm,
      };
    }
    if (gridSize.md) {
      finalProps = {
        ...finalProps,
        lg: gridSize.md,
        md: gridSize.md,
        xl: gridSize.md,
      };
    }
    if (gridSize.lg) {
      finalProps = {
        ...finalProps,
        lg: gridSize.lg,
        xl: gridSize.lg,
      };
    }
    if (gridSize.xl) {
      finalProps = {
        ...finalProps,
        xl: gridSize.xl,
      };
    }
  }

  return finalProps;
}

function nativeUseScrollTrigger() {
  return null;
}

export { nativeUseScrollTrigger };

const variantMap = {
  body1  : "bodyLarge",
  body2  : "bodyMedium",
  button : "bodyLarge",
  caption: "bodySmall",
  //For chip
  flat   : "filled",
  
  h1: "displayLarge",
  
  h2: "displayMedium",
  
  h3: "displaySmall",
  
  h4: "headlineLarge",
  
  h5: "headlineMedium",
  
  h6: "headlineSmall",
  
  outlined: "outlined",
  
  overline: "labelLarge",
  
  subtitle1: "titleMedium",
  subtitle2: "titleSmall",
};

export { variantMap };
