import { FlatList, View, Text } from "react-native";
import React, { useContext, useState } from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import FavoriteCard from "../components/FavoriteCard";
import { useNavigation } from "@react-navigation/native";
import { ArticleContext } from "../contexts/Article";

const Stack = createStackNavigator();

const Favorite = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const { favorites } = useContext(ArticleContext);

  const onSearch = () => {};

  const filteredArticles = favorites.filter((article) => {
    const term = search.toLowerCase().trim();
    return (
      article.titulo.toLowerCase().includes(term) ||
      article.descripcion.toLowerCase().includes(term) ||
      article.categoria_nombre.toLowerCase().includes(term) ||
      article.tags.some((tag) => tag.toLowerCase().includes(term)) ||
      article.autores.some((author) => author.toLowerCase().includes(term))
    );
  });

  return (
    <GradientBackground>
      <Header
        title="Favoritos"
        value={search}
        onChangeText={setSearch}
        onSearch={onSearch}
      />
      {favorites.length > 0 ? (
        <FlatList
          data={filteredArticles}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          className="px-4"
          renderItem={({ item }) => (
            <FavoriteCard
              onPress={() => navigation.navigate("Detail", { id: item.id })}
              title={item.titulo}
              author={item.autores[0]}
              source={{
                uri: item.portada_url,
              }}
            />
          )}
        />
      ) : (
        <View className="justify-center items-center py-[50%]">
          <Text className="font-bold text-white text-lg">
            No tienes artículos favoritos.
          </Text>
        </View>
      )}
    </GradientBackground>
  );
};

const FavoriteScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          presentation: "modal",
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteScreen;
