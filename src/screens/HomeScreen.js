import { Text } from "react-native";
import React from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <GradientBackground>
      <Header title="Inicio" />
      <Text>Home</Text>
    </GradientBackground>
  );
};

export default HomeScreen;
