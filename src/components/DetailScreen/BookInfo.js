import { View, Text, Linking, Alert, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { ArticleContext, actionTypes } from "../../contexts/Article";
import { URL_BASE } from "../../util/constans";

const BookInfo = ({ title, id, cover, year, summary, category, pdfName }) => {
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

        categoria_nombre: category,
      },
    });
    Alert.alert("Agregado a favoritos");
  };

  const openPDF = async () => {
    const url = `${URL_BASE}/public/publicaciones/${pdfName}`;
    const supported = await Linking.canOpenURL(url);
    if (!supported) {
      Alert.alert("Error", "No se pudo abrir el PDF");
    }
    await Linking.openURL(url);
  };

  return (
    <View className="justify-between flex-1">
      <Text className="text-sm font-bold text-white">{title}</Text>
      <Text className="font-medium text-[#D7D7D7] text-sm">Año: {year}</Text>
      <View className="flex-row items-center" style={{ gap: 20 }}>
        <TouchableOpacity
          onPress={openPDF}
          className="bg-red-500 w-[98px] h-[34px] items-center justify-center rounded-lg"
        >
          <LinearGradient
            className="items-center justify-center w-full h-full rounded-lg"
            colors={["#FFA3A3", "#FC2727"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          >
            <Text className="text-sm font-semibold text-white">Leer Ahora</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFavorite}
          className="bg-blue-500 w-[44px] h-[44px] rounded-full items-center justify-center"
        >
          <LinearGradient
            className="items-center justify-center w-full h-full rounded-full"
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
