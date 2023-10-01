import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import BookCover from "./BookCover";

const DetailedBookCard = ({ onPress, title, source, year }) => {
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
        <View className="justify-between flex-1 py-4">
          <Text className="text-base font-bold text-white">{title}</Text>
          <Text className="text-sm font-medium text-white">Año: {year}</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DetailedBookCard;
