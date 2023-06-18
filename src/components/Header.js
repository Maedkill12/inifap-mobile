import { View, Text, TextInput } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ title }) => {
  return (
    <View className="px-4 py-2 ">
      <Text className="text-white font-semibold text-2xl">{title}</Text>
      <View className="mt-3 mb-4 px-2 bg-[#4C7C7C] rounded-xl flex flex-row items-center">
        <TextInput
          className="flex-1 text-sm text-white py-4 border-none"
          placeholder="Buscar por autor, título, etc..."
          placeholderTextColor={"white"}
        />
        <TouchableOpacity>
          <AntDesign name="search1" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
