import { Text } from "react-native";
import React from "react";

const ListName = ({ color, title }) => {
  return <Text className={`font-medium text-base ${color}`}>{title}</Text>;
};

export default ListName;
