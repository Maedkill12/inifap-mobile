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
import { useSnapshot } from "valtio";
import state from "../state";

const Stack = createStackNavigator();

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <GradientBackground>
      <Header title="Inicio" />
      <View style={{ gap: 40 }}>
        <HorizontalList name="Disponibles" list={snap.books} />
        <HorizontalList name="Recientes" list={snap.books} />
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
