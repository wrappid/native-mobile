// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars, import/order
import React from "react";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
// eslint-disable-next-line import/namespace
import { View } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components/native";

// Import style utilities

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.ALERT];

// Mapping MUI variants → React Native Paper variants
const mobileVariantMapping = {
  filled  : "bodyLarge",
  outlined: "bodyMedium",
  standard: "bodySmall",
};

// Define allowed text variants
const validTextVariants = new Set([
  "displayLarge",
  "displayMedium",
  "displaySmall",
  "headlineLarge",
  "headlineMedium",
  "headlineSmall",
  "titleLarge",
  "titleMedium",
  "titleSmall",
  "labelLarge",
  "labelMedium",
  "labelSmall",
  "bodyLarge",
  "bodyMedium",
  "bodySmall",
  "default",
]);

// Define severity colors
const severityColors = {
  error  : { background: "#FFBABA", text: "#D8000C" },
  info   : { background: "#BDE5F8", text: "#00529B" },
  success: { background: "#DFF2BF", text: "#4F8A10" },
  warning: { background: "#FEEFB3", text: "#9F6000" },
};

// Wrapper for background and border
const AlertWrapper = styled(View)`
  ${(props) => {
    const { background, text } = severityColors[props.severity] || { background: "transparent", text: "#000" };

    // Determine variant-specific styling
    const isFilledVariant = props.originalVariant === "filled";
    const isOutlinedVariant = props.originalVariant === "outlined";

    // Construct style object
    const variantStyles = {
      backgroundColor: isFilledVariant ? background : "transparent",
      borderColor    : isOutlinedVariant ? text : (isFilledVariant ? background : "transparent"),
      borderRadius   : 5,
      borderWidth    : isOutlinedVariant ? 1 : 0,
      margin         : 5,
      padding        : 10,
    };

    // Apply additional styles from getEffectiveStyle
    const additionalStyles = getEffectiveStyle(props.styleClasses) || {};

    // Merge styles
    return Object.assign(variantStyles, additionalStyles);
  }}
`;

// Styled Text Component
const AlertText = styled(Text)`
  color: ${(props) => {
    const { text } = severityColors[props.severity] || { text: "#000" };

    return text;
  }};
`;

// Exported SCAlert Component
export const SCAlert = ({ 
  children, 
  severity = "info", 
  variant = "filled", 
  styleClasses = [], 
  ...props 
}) => {
  const styleClassList = [...defaultStyleClasses, ...styleClasses];

  // Convert MUI variant to a valid React Native Paper variant
  const mappedVariant = mobileVariantMapping[variant] || "bodyMedium";

  // Ensure final variant is valid
  const finalVariant = validTextVariants.has(mappedVariant) ? mappedVariant : "bodyMedium";

  return (
    <AlertWrapper 
      severity={severity} 
      variant={finalVariant} 
      originalVariant={variant} 
      styleClasses={styleClassList}
    >
      <AlertText severity={severity} {...props}>
        {children}
      </AlertText>
    </AlertWrapper>
  );
};