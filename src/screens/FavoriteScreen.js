import { Text } from "react-native";
import React from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";

const FavoriteScreen = () => {
  return (
    <GradientBackground>
      <Header title="Favoritos" />
      <Text>FavoriteScreen</Text>
    </GradientBackground>
  );
};

export default FavoriteScreen;
