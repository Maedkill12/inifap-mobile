import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import GradientBackground from "../components/GradientBackground";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import HorizontalList from "../components/HorizontalList";
import { bookList } from "../../dummy";

const DetailScreen = () => {
  const navigation = useNavigation();
  const {
    params: { book },
  } = useRoute();
  return (
    <GradientBackground>
      <View className="px-4 z-10">
        <TouchableOpacity
          className="bg-white rounded-full w-[48px] h-[48px] items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={36} color="#427B70" />
        </TouchableOpacity>
        <View className="mt-2 flex-row top-5" style={{ gap: 20 }}>
          <View className="h-[170px] w-[116px]">
            <Image
              source={{ uri: book.portada }}
              className="w-full h-full overflow-hidden rounded-xl"
            />
          </View>
          <View className="justify-between flex-1">
            <Text className="font-bold text-white text-sm">{book.titulo}</Text>
            <Text className="font-medium text-[#D7D7D7] text-sm">
              Autor: {book.autor}
            </Text>
            <View className="flex-row items-center" style={{ gap: 20 }}>
              <TouchableOpacity className="bg-red-500 w-[98px] h-[34px] items-center justify-center rounded-lg">
                <LinearGradient
                  className="w-full h-full items-center justify-center rounded-lg"
                  colors={["#FFA3A3", "#FC2727"]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                >
                  <Text className="font-semibold text-white text-sm">
                    Leer Ahora
                  </Text>
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
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-white flex-1 pt-14 px-4"
      >
        <Text className="font-semibold text-base">Descripción</Text>
        <Text className="italic font-light text-xs min-h-[130px] max-h-[150px] mb-2 overflow-hidden">
          {book.descripcion}
        </Text>
        <HorizontalList
          name="Recomendados"
          list={bookList}
          styles="px-0"
          nameStyles="text-black"
        />
      </ScrollView>
    </GradientBackground>
  );
};

export default DetailScreen;
