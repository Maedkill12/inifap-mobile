import { View } from "react-native";
import React from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import { useSnapshot } from "valtio";
import state from "../state";
import HorizontalBookList from "../components/HorizontalBookList/HorizontalBookList";

const Stack = createStackNavigator();

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <GradientBackground>
      <Header title="Inicio" />
      <View style={{ gap: 40 }}>
        <HorizontalBookList
          title="Disponibles"
          list={snap.books}
          color="text-white"
        />
        <HorizontalBookList
          title="Recientes"
          list={snap.books}
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
