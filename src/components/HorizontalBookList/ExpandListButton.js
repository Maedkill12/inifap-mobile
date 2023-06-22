import { Text, TouchableOpacity } from "react-native";
import React from "react";

const ExpandListButton = ({ onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text className={`font-light italic text-sm ${color}`}>Ver todo</Text>
    </TouchableOpacity>
  );
};

export default ExpandListButton;
