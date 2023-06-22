import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const BookInfo = ({ title, author }) => {
  return (
    <View className="justify-between flex-1">
      <Text className="font-bold text-white text-sm">{title}</Text>
      <Text className="font-medium text-[#D7D7D7] text-sm">
        Autor: {author}
      </Text>
      <View className="flex-row items-center" style={{ gap: 20 }}>
        <TouchableOpacity className="bg-red-500 w-[98px] h-[34px] items-center justify-center rounded-lg">
          <LinearGradient
            className="w-full h-full items-center justify-center rounded-lg"
            colors={["#FFA3A3", "#FC2727"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          >
            <Text className="font-semibold text-white text-sm">Leer Ahora</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue-500 w-[44px] h-[44px] rounded-full items-center justify-center">
          <LinearGradient
            className="w-full h-full items-center justify-center rounded-full"
            colors={["#5B9DFF", "#013F9C"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <AntDesign name="hearto" size={24} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookInfo;
