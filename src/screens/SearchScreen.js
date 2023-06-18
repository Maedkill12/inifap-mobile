import { Text } from "react-native";
import React from "react";
import GradientBackground from "../components/GradientBackground";
import Header from "../components/Header";

const SearchScreen = () => {
  return (
    <GradientBackground>
      <Header title="Buscar" />
      <Text>SearchScreen</Text>
    </GradientBackground>
  );
};

export default SearchScreen;
