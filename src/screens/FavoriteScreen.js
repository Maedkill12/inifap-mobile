import { FlatList } from "react-native";
import React from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import { bookList } from "../../dummy";
import FavoriteCard from "../components/FavoriteCard";

const Stack = createStackNavigator();

const Favorite = () => {
  return (
    <GradientBackground>
      <Header title="Favoritos" />
      <FlatList
        data={bookList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        className="px-4"
        renderItem={({ item }) => <FavoriteCard book={item} />}
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
