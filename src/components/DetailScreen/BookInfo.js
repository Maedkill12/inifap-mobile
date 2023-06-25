import { View, Text } from "react-native";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { ArticleContext, actionTypes } from "../../contexts/Article";
import { Alert } from "react-native";

const BookInfo = ({ title, id, cover, authores, summary, tags, category }) => {
  const { dispatch, favorites } = useContext(ArticleContext);

  const handleFavorite = () => {
    if (favorites.some((fav) => fav.id === id)) {
      dispatch({ type: actionTypes.removeFavorite, payload: id });
      return Alert.alert("Removido de favoritos");
    }
    dispatch({
      type: actionTypes.addFavorite,
      payload: {
        id,
        portada_url: cover,
        titulo: title,
        autores: authores,
        descipcion: summary,
        tags,
        categoria_nombre: category,
      },
    });
    Alert.alert("Agregado a favoritos");
  };

  return (
    <View className="justify-between flex-1">
      <Text className="font-bold text-white text-sm">{title}</Text>
      <Text className="font-medium text-[#D7D7D7] text-sm">
        Autor: {authores[0]}
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
        <TouchableOpacity
          onPress={handleFavorite}
          className="bg-blue-500 w-[44px] h-[44px] rounded-full items-center justify-center"
        >
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
