import React from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import BookCard from "../components/BookCover";
import { FlatList } from "react-native";
import { useSnapshot } from "valtio";
import state from "../state";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const Search = () => {
  const navigation = useNavigation();
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
        renderItem={({ item }) => (
          <BookCard
            book={item}
            onPress={() => navigation.navigate("Detail", { book: item })}
            source={{
              uri: "https://getcovers.com/wp-content/uploads/2020/12/image49-954x1536.jpg",
            }}
          />
        )}
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
