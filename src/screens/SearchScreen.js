import React from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import BookCard from "../components/BookCard";
import { FlatList } from "react-native";
import { useSnapshot } from "valtio";
import state from "../state";

const Stack = createStackNavigator();

const Search = () => {
  const snap = useSnapshot(state);
  return (
    <GradientBackground>
      <Header title="Buscar" />
      <FlatList
        data={snap.books}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.canonical_isbn}
        className="px-4"
        columnWrapperStyle={{
          justifyContent: "space-around",
          marginBottom: 20,
        }}
        numColumns={2}
        renderItem={({ item }) => <BookCard book={item} />}
      />
    </GradientBackground>
  );
};

const SearchScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Search} name="Search" />
      <Stack.Screen
        component={DetailScreen}
        name="Detail"
        options={{
          presentation: "modal",
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchScreen;
