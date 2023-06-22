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
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const Favorite = () => {
  const navigation = useNavigation();
  const snap = useSnapshot(state);
  return (
    <GradientBackground>
      <Header title="Favoritos" />
      <FlatList
        data={snap.books}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.canonical_isbn}
        className="px-4"
        renderItem={({ item }) => (
          <FavoriteCard
            onPress={() => navigation.navigate("Detail", { book: item })}
            title={item.title}
            author={item.authors[0]}
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
