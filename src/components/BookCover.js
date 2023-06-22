import { Image, TouchableOpacity, View } from "react-native";
import React from "react";

const BookCover = ({ onPress, source }) => {
  return (
    <>
      {onPress ? (
        <TouchableOpacity
          className="h-[170px] w-[116px] mr-2"
          onPress={onPress}
        >
          <Image
            source={source}
            className="w-full h-full overflow-hidden rounded-xl"
          />
        </TouchableOpacity>
      ) : (
        <View className="h-[170px] w-[116px] mr-2">
          <Image
            source={source}
            className="w-full h-full overflow-hidden rounded-xl"
          />
        </View>
      )}
    </>
  );
};

export default BookCover;
