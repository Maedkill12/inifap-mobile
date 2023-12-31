import { Image } from "expo-image";
import { View } from "react-native";

import React from "react";
import { TouchableOpacity } from "react-native";

const BookCover = ({ onPress, source, titleComponent }) => {
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper className={"h-[170px] w-[116px] mr-2"} onPress={onPress}>
      <Image
        source={source?.uri ?? require("../../assets/icon.png")}
        className={"w-full flex-1 overflow-hidden rounded-xl"}
      />
      {onPress && titleComponent}
    </Wrapper>
  );
};

export default BookCover;
