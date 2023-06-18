import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      className="flex-1"
      colors={["#162D2D", "#427B70"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <SafeAreaView>{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default GradientBackground;
