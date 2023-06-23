import { View } from "react-native";
import React, { useContext } from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import HorizontalBookList from "../components/HorizontalBookList/HorizontalBookList";
import { ArticleContext } from "../contexts/Article";

const Stack = createStackNavigator();

const Home = () => {
  const { articles } = useContext(ArticleContext);

  return (
    <GradientBackground>
      <Header title="Inicio" />
      <View style={{ gap: 40 }}>
        <HorizontalBookList
          title="Disponibles"
          list={articles}
          color="text-white"
        />
        <HorizontalBookList
          title="Recientes"
          list={articles}
          color="text-white"
        />
      </View>
    </GradientBackground>
  );
};

const HomeScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
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

export default HomeScreen;
