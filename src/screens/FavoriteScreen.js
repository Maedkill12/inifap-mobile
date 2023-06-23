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
        keyExtractor={(item) => item.canonical_isbn}
        className="px-4"
        renderItem={({ item }) => (
          <FavoriteCard
            onPress={() => navigation.navigate("Detail", { id: item.id })}
            title={item.titulo}
            author={"Unkown"}
            source={{
              uri: "https://getcovers.com/wp-content/uploads/2020/12/image49-954x1536.jpg",
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
