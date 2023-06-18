import React from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import { bookList } from "../../dummy";
import BookCard from "../components/BookCard";
import { FlatList } from "react-native";

const Stack = createStackNavigator();

const Search = () => {
  return (
    <GradientBackground>
      <Header title="Buscar" />
      <FlatList
        data={bookList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
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
