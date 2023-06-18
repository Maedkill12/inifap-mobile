import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FavoriteCard = ({ book }) => {
  const navigation = useNavigation();
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
        onPress={() => navigation.navigate("Detail", { book })}
      >
        <Image
          source={{
            uri: "https://getcovers.com/wp-content/uploads/2020/12/image49-954x1536.jpg",
          }}
          className="h-[169px] w-[116px] rounded-xl"
        />
        <View className="flex-1 py-4 justify-between">
          <Text className="font-bold text-white text-base">{book.title}</Text>
          <Text className="text-white font-medium text-sm">
            Autor: {book.authors[0]}
          </Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default FavoriteCard;
