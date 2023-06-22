import { Text, View } from "react-native";
import React from "react";

const BookDescription = ({ summary }) => {
  return (
    <View className="px-4">
      <Text className="font-semibold text-base">Descripción</Text>
      <Text className="italic font-light text-xs min-h-[130px] max-h-[150px] mb-2 overflow-hidden">
        {summary}
      </Text>
    </View>
  );
};

export default BookDescription;
