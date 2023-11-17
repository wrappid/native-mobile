import { Rating, AirbnbRating } from "react-native-ratings";
import { View, Text } from "react-native";
import React from "react";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";

export default function NativeRating(props) {
  const { defaultValue, name } = props;
  const disabled = name === "disabled" ? true : false;
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };
  return (
    <AirbnbRating
      count={11}
      reviews={[
        "Terrible",
        "Bad",
        "Meh",
        "OK",
        "Good",
        "Hmm...",
        "Very Good",
        "Wow",
        "Amazing",
        "Unbelievable",
        "Jesus",
      ]}
      defaultRating={defaultValue}
      size={20}
      isDisabled={disabled}
    />
  );
  // return <NativeTypographyBody1>Hello world</NativeTypographyBody1>;
  // return (
  //   <Rating
  //     showRating
  //     onFinishRating={ratingCompleted}
  //     style={{ paddingVertical: 10 }}
  //   />
  // );
}
