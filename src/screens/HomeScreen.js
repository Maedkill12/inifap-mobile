import { View } from "react-native";
import React from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";
import HorizontalList from "../components/HorizontalList";
import { bookList } from "../../dummy";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";

const Stack = createStackNavigator();

const Home = () => {
  return (
    <GradientBackground>
      <Header title="Inicio" />
      <View style={{ gap: 40 }}>
        <HorizontalList name="Disponibles" list={bookList} />
        <HorizontalList name="Recientes" list={bookList} />
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
