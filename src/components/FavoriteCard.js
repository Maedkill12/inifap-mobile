import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import BookCover from "./BookCover";

const FavoriteCard = ({ onPress, title, author, source }) => {
  return (
    <LinearGradient
      colors={["#6CAAA0", "#4B7C78"]}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
      className="rounded-xl my-3 h-[169px]"
    >
      <TouchableOpacity
        className="flex-row"
        style={{ gap: 20 }}
        onPress={onPress}
      >
        <BookCover onPress={null} source={source} />
        <View className="flex-1 py-4 justify-between">
          <Text className="font-bold text-white text-base">{title}</Text>
          <Text className="text-white font-medium text-sm">
            Autor: {author}
          </Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default FavoriteCard;
