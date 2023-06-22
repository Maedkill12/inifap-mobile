import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-full w-[48px] h-[48px] items-center justify-center"
      onPress={onPress}
    >
      <AntDesign name="arrowleft" size={36} color="#427B70" />
    </TouchableOpacity>
  );
};

export default BackButton;
