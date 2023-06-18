import { FlatList } from "react-native";
import React from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import FavoriteCard from "../components/FavoriteCard";
import { useSnapshot } from "valtio";
import state from "../state";

const Stack = createStackNavigator();

const Favorite = () => {
  const snap = useSnapshot(state);
  return (
    <GradientBackground>
      <Header title="Favoritos" />
      <FlatList
        data={snap.books}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.canonical_isbn}
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
