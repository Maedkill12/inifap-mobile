import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const BookCover = ({ onPress, source }) => {
  if (!source?.uri) {
    return null;
  }

  const containerStyles = "h-[170px] w-[116px] mr-2";
  const imageStyles = "w-full h-full overflow-hidden rounded-xl";

  const content = <Image source={source.uri} className={imageStyles} />;

  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper className={containerStyles} onPress={onPress}>
      {content}
    </Wrapper>
  );
};

export default BookCover;
