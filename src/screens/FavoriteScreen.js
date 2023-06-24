import { FlatList } from "react-native";
import React, { useContext } from "react";
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
  const { articles } = useContext(ArticleContext);
  return (
    <GradientBackground>
      <Header title="Favoritos" />
      <FlatList
        data={articles}
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
