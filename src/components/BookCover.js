import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const BookCover = ({ onPress, source, titleComponent }) => {
  if (!source?.uri) {
    return null;
  }

  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper className={"h-[170px] w-[116px] mr-2"} onPress={onPress}>
      <Image
        source={source.uri}
        className={"w-full flex-1 overflow-hidden rounded-xl"}
      />
      {onPress && titleComponent}
    </Wrapper>
  );
};

export default BookCover;
